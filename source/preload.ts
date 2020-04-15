import EventDispatcher from "./event_dispatcher";
import { isBoolean } from "./is_type";

export type PreloadData = {
    [id: string]: any;
};

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
    audio: {
        extensions: ["ogg", "mp3"],
        responseType: "arraybuffer",
    },
} as const;

export type FileInfoType = keyof typeof FileInfo;

// key is the 'id'
// value is the 'data'
const DATA: PreloadData = {};

/**
 * Get an element that was saved in the global `DATA` object.
 *
 * @param id The id of the element we're retrieving.
 * @return The preloaded element.
 */
export function get(id: string) {
    return DATA[id];
}

/**
 * Determine the type of a file based on its extension.
 *
 * @param file The file name.
 * @return The file type.
 */
export function getType(file: string): FileInfoType {
    const extension = file.split(".").pop();

    if (extension) {
        const type = Object.entries(FileInfo).find(([_, value]) =>
            ((value.extensions as unknown) as string[]).includes(extension)
        );

        if (type) {
            return type[0] as FileInfoType;
        }
    }

    return "text"; // default to type 'text'
}

export interface PreloadArgs {
    saveGlobal?: boolean; // save to global 'data' object, or to this object's 'data'
}

/**
 * Basic Usage:
 *
 *     const preload = new Preload({ saveGlobal: true });
 *
 *     preload.addEventListener( 'complete', completeListener );
 *     preload.load( 'id', 'path_to_file.png' );
 *
 *         // or with a manifest
 *     var manifest = [
 *             { id: 'the_id', path: 'path_to_file.png' }
 *         ];
 *     preload.loadManifest( manifest, '' );
 *
 * Events:
 *
 * - `complete` -- `listener( data: { failed_ids: string[]; loaded_ids: string[]; } );`
 * - `error` -- `listener( data: { id: string; event; } );`
 * - `abort` -- `listener( data: { id: string; event; } );`
 * - `progress` -- `listener( progress: number );`
 * - `fileload` -- `listener( data: { id: string; data: Object; } );`
 */
export class Preload extends EventDispatcher {
    private save_global: boolean;
    private _data: PreloadData;
    private _total_items: number;
    private _loaded_items: number;
    private _failed_ids: string[]; // list of the ids that failed to load
    private _loaded_ids: string[]; // list of the ids that were successfully loaded

    constructor(args?: PreloadArgs) {
        super();

        var saveGlobal = false;

        if (typeof args !== "undefined") {
            if (isBoolean(args.saveGlobal)) {
                saveGlobal = args.saveGlobal;
            }
        }

        this._total_items = 0;
        this._loaded_items = 0;
        this.save_global = saveGlobal;
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
    protected _loaded(id: string, data: any) {
        if (this.save_global) {
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
    protected _failed_to_load(id: string) {
        this._loaded_items++;
        this._failed_ids.push(id);

        if (this._loaded_items >= this._total_items) {
            this._loading_complete();
        }
    }

    /**
     * All the elements were dealt with. Dispatch the `complete` event with a list of the loaded ids, and another list with the ids that failed to load as well.
     */
    protected _loading_complete() {
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
    protected _on_error(event: ProgressEvent, id: string) {
        this.dispatchEvent("error", { event: event, id: id });
    }

    /**
     * Dispatch the `abort` event.
     *
     * @param event The event to dispatch.
     * @param id The id of the element.
     */
    protected _on_abort(event: ProgressEvent, id: string) {
        this.dispatchEvent("abort", { event: event, id: id });
    }

    /**
     * Dispatch the current progress percentage.
     *
     * @param event The event that was triggered.
     */
    protected _on_progress(event: ProgressEvent) {
        var fileProgress = 0;

        if (event.lengthComputable) {
            fileProgress = event.loaded / event.total;
        }

        var progress = Math.round(
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
        const type = typeId ?? getType(path);
        const _this = this;

        this._total_items++;

        const request = new XMLHttpRequest();

        request.open("get", path, true);
        request.responseType = FileInfo[type].responseType;

        // add the request events
        request.addEventListener("error", function (event) {
            _this._on_error(event, id);
        });
        request.addEventListener("abort", function (event) {
            _this._on_abort(event, id);
        });
        request.addEventListener("progress", function (event) {
            _this._on_progress(event);
        });
        request.addEventListener(
            "load",
            function () {
                // failed to load
                if (this.status !== 200) {
                    _this._failed_to_load(id);
                    return;
                }

                var response = this.response;

                if (type === "image") {
                    var image = new Image();
                    image.src = window.URL.createObjectURL(response);
                    image.onload = function () {
                        _this._loaded(id, image);
                    };
                } else if (type === "json") {
                    // for the browsers that don't return the object, but a string instead
                    if (typeof response === "string") {
                        try {
                            response = JSON.parse(response);
                        } catch (error) {
                            _this._failed_to_load(id);
                            return;
                        }
                    }

                    _this._loaded(id, response);
                } else if (type === "audio") {
                    //HERE
                    const extension = path.split(".").pop() as "ogg" | "mp3"; //HERE

                    _this.loadAudio(
                        response,
                        extension,
                        (audio) => {
                            _this._loaded(id, audio);
                        },
                        () => {
                            _this._failed_to_load(id);
                        }
                    );
                } else {
                    _this._loaded(id, response);
                }
            },
            false
        );

        request.send();
    }

    /**
     * Load several files.
     *
     * @param manifest Has the information about the files.
     * @param basePath Base path for all the files in the manifest.
     */
    loadManifest(manifest: { id: string; path: string }[], basePath?: string) {
        var length = manifest.length;

        if (typeof basePath === "undefined") {
            basePath = "";
        }

        for (var a = 0; a < length; a++) {
            var file = manifest[a];

            this.load(file.id, basePath + file.path);
        }
    }

    /**
     * Get a previously loaded file.
     *
     * @param id The id of the file.
     */
    get(id: string) {
        return this._data[id];
    }

    loadAudio(
        response: any,
        extension: "mp3" | "ogg",
        onLoad: (audio: HTMLAudioElement) => void,
        onError: () => void
    ) {
        const types = {
            mp3: "audio/mpeg",
            ogg: "audio/ogg",
        };

        const blob = new Blob([response], { type: types[extension] });
        const objectUrl = URL.createObjectURL(blob);

        const audio = new Audio();
        audio.src = objectUrl;

        // Release resource when it's loaded
        audio.oncanplay = () => {
            URL.revokeObjectURL(objectUrl);
            onLoad(audio);
        };
        audio.onerror = onError;
    }
}
