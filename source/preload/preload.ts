import { EventDispatcher } from "../event_dispatcher/event_dispatcher";
import { isBoolean } from "../is_type/is_type";

export type PreloadData = {
    [id: string]: any;
};

export type ManifestData = {
    id: string;
    path: string;
    type?: FileInfoType; // if not specified it tries to guess from the file extension
}[];

export type PreloadEvent =
    | "complete"
    | "error"
    | "abort"
    | "progress"
    | "fileload";

// supported file types
const FileInfo = {
    image: {
        extensions: ["png", "jpg", "jpeg"],
        responseType: "blob",
    },
    json: {
        extensions: ["json"],
        responseType: "json",
    },
    text: {
        extensions: ["txt"],
        responseType: "text",
    },
    audio_ogg: {
        extensions: ["ogg"],
        responseType: "arraybuffer",
    },
    audio_mp3: {
        extensions: ["mp3"],
        responseType: "arraybuffer",
    },
} as const;

export type FileInfoType = keyof typeof FileInfo;

export interface PreloadArgs {
    saveGlobal?: boolean; // save to global 'data' object, or to this object's 'data'
}

// key is the 'id'
// value is the 'data'
const DATA: PreloadData = {};

/**
 * Determine the type of a file based on its extension. If it can't figure it out it defaults to type 'text'.
 *
 * @param file The file name.
 * @return The file type.
 */
function getType(file: string): FileInfoType {
    const extension = file.split(".").pop();

    if (extension) {
        const type = Object.entries(FileInfo).find(([_, value]) =>
            (value.extensions as unknown as string[]).includes(extension)
        );

        if (type) {
            return type[0] as FileInfoType;
        }
    }

    return "text"; // default to type 'text'
}

/**
 * Basic Usage:
 *     import { Preload } from '@drk4/utilities';
 *
 *     const preload = new Preload();
 *
 *     preload.addEventListener('complete', (loaded) => {
 *         console.log( loaded.loaded_ids );
 *         const image = preload.get( 'the_id' );
 *     });
 *
 *     const manifest = [
 *             { id: 'the_id', path: 'path_to_file.png' },          // try to determine the type from the extension
 *             { id: 'other', path: 'other_path', type: 'json' }    // or just specify it directly
 *         ];
 *     preload.loadManifest( manifest );
 *
 * Events:
 *
 * - `complete` -- `listener( data: { failed_ids: string[]; loaded_ids: string[]; } );`
 * - `error` -- `listener( data: { id: string; event; } );`
 * - `abort` -- `listener( data: { id: string; event; } );`
 * - `progress` -- `listener( progress: number );`
 * - `fileload` -- `listener( data: { id: string; data: Object; } );`
 */
export class Preload extends EventDispatcher<PreloadEvent> {
    private _save_global: boolean;
    private _data: PreloadData;
    private _total_items: number;
    private _loaded_items: number;
    private _failed_ids: string[]; // list of the ids that failed to load
    private _loaded_ids: string[]; // list of the ids that were successfully loaded

    /**
     * Get an element that was saved in the global `DATA` object.
     *
     * @param id The id of the element we're retrieving.
     * @return The preloaded element.
     */
    static get(id: string) {
        return DATA[id];
    }

    constructor(args: PreloadArgs = {}) {
        super();

        this._total_items = 0;
        this._loaded_items = 0;
        this._save_global = isBoolean(args.saveGlobal)
            ? args.saveGlobal
            : false;
        this._data = {};
        this._failed_ids = [];
        this._loaded_ids = [];
    }

    /**
     * An element just finished being loaded, add it to the `data` object (either the global or the object) and dispatch the relevant events.
     *
     * @param id The id of the loaded element.
     * @param data Its data.
     */
    private _loaded(id: string, data: any) {
        if (this._save_global) {
            DATA[id] = data;
        } else {
            this._data[id] = data;
        }

        this.dispatchEvent("fileload", { id: id, data: data });

        this._loaded_items++;
        this._loaded_ids.push(id);

        if (this._loaded_items >= this._total_items) {
            this._loading_complete();
        }
    }

    /**
     * An element failed to load. We'll keep track of its id, to send it later on the 'complete' event.
     */
    private _failed_to_load(id: string) {
        this._loaded_items++;
        this._failed_ids.push(id);

        if (this._loaded_items >= this._total_items) {
            this._loading_complete();
        }
    }

    /**
     * All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.
     */
    private _loading_complete() {
        this.dispatchEvent("complete", {
            failed_ids: this._failed_ids,
            loaded_ids: this._loaded_ids,
        });

        // clear the variables
        this._failed_ids.length = 0;
        this._loaded_ids.length = 0;
        this._loaded_items = 0;
        this._total_items = 0;
    }

    /**
     * Dispatch the `error` event.
     *
     * @param event The event to dispatch.
     * @param id The id of the element.
     */
    private _on_error(event: ProgressEvent, id: string) {
        this.dispatchEvent("error", { event: event, id: id });
    }

    /**
     * Dispatch the `abort` event.
     *
     * @param event The event to dispatch.
     * @param id The id of the element.
     */
    private _on_abort(event: ProgressEvent, id: string) {
        this.dispatchEvent("abort", { event: event, id: id });
    }

    /**
     * Dispatch the current progress percentage.
     *
     * @param event The event that was triggered.
     */
    private _on_progress(event: ProgressEvent) {
        let fileProgress = 0;

        if (event.lengthComputable) {
            fileProgress = event.loaded / event.total;
        }

        const progress = Math.round(
            ((fileProgress + this._loaded_items) / this._total_items) * 100
        );

        this.dispatchEvent("progress", progress);
    }

    /**
     * Load a file.
     *
     * @param id The id to be used later on to get the element.
     * @param path Path to the file.
     * @param typeId Type of the file to load. If not provided then it will try to determine the type from the file extension.
     */
    load(id: string, path: string, typeId?: FileInfoType) {
        this._total_items++;

        const type = typeId ?? getType(path);
        const request = new XMLHttpRequest();

        request.open("get", path, true);
        request.responseType = FileInfo[type].responseType;

        // add the request events
        request.addEventListener("error", (event) => {
            this._on_error(event, id);
        });
        request.addEventListener("abort", (event) => {
            this._on_abort(event, id);
        });
        request.addEventListener("progress", (event) => {
            this._on_progress(event);
        });
        request.addEventListener(
            "load",
            () => {
                // failed to load
                if (request.status !== 200) {
                    this._failed_to_load(id);
                    return;
                }

                const response = request.response;

                switch (type) {
                    case "image":
                        this.loadImage(id, response);
                        break;

                    case "json":
                        this.loadJson(id, response);
                        break;

                    case "audio_mp3":
                        this.loadAudio(
                            response,
                            "audio/mpeg",
                            (audio) => {
                                this._loaded(id, audio);
                            },
                            () => {
                                this._failed_to_load(id);
                            }
                        );
                        break;

                    case "audio_ogg":
                        this.loadAudio(
                            response,
                            "audio/ogg",
                            (audio) => {
                                this._loaded(id, audio);
                            },
                            () => {
                                this._failed_to_load(id);
                            }
                        );
                        break;

                    default:
                        this._loaded(id, response);
                        break;
                }
            },
            false
        );

        request.send();
    }

    /**
     * Load several files.
     */
    loadManifest(manifest: ManifestData) {
        manifest.forEach((info) => {
            this.load(info.id, info.path, info.type);
        });
    }

    /**
     * Get a previously loaded file.
     */
    get(id: string) {
        return this._data[id];
    }

    /**
     * Load an audio resource.
     */
    private loadAudio(
        response: any,
        blobType: "audio/mpeg" | "audio/ogg",
        onLoad: (audio: HTMLAudioElement) => void,
        onError: () => void
    ) {
        const blob = new Blob([response], { type: blobType });
        const objectUrl = URL.createObjectURL(blob);
        const audio = new Audio();

        audio.oncanplay = () => {
            // release resource when it's loaded
            URL.revokeObjectURL(objectUrl);
            onLoad(audio);
        };
        audio.onerror = onError;
        audio.src = objectUrl;
    }

    /**
     * Load a json resource.
     */
    private loadJson(id: string, response: any) {
        // for the browsers that don't return the object, but a string instead
        if (typeof response === "string") {
            try {
                response = JSON.parse(response);
            } catch (error) {
                this._failed_to_load(id);
                return;
            }
        }

        this._loaded(id, response);
    }

    /**
     * Load an image resource.
     */
    private loadImage(id: string, response: any) {
        const image = new Image();

        image.onload = () => {
            this._loaded(id, image);
        };
        image.onerror = () => {
            this._failed_to_load(id);
        };
        image.src = window.URL.createObjectURL(response);
    }
}
