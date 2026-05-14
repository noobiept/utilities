/* eslint-disable @typescript-eslint/ban-ts-comment */
import { vi } from "vitest";

export function mockXHR(response: any, status = 200) {
    const eventListeners: {
        [key: string]: (args?: any) => unknown;
    } = {};

    const mock = function (this: XMLHttpRequest) {
        this.open = vi.fn();
        this.addEventListener = vi.fn((type, listener) => {
            eventListeners[type] = listener as (args?: any) => unknown;
        });
        this.send = vi.fn(() => {
            eventListeners["progress"].call(
                this,
                new ProgressEvent("progress")
            );

            // Trigger error event if status is not 200
            if (status !== 200 && eventListeners["error"]) {
                eventListeners["error"].call(this, new ProgressEvent("error"));
            } else {
                eventListeners["load"].call(this);
            }
        });
        Object.defineProperty(this, "status", {
            writable: true,
            value: status,
        });

        Object.defineProperty(this, "response", {
            writable: true,
            value: response,
        });
    };

    // @ts-ignore
    window.XMLHttpRequest = mock;
}

export function mockURL() {
    // @ts-ignore
    window.URL = {
        createObjectURL: vi.fn(() => "asd"),
        revokeObjectURL: vi.fn(),
    };
}

export function mockImage() {
    class MyImage {
        onload: () => void = () => {};

        set src(_url: string) {
            this.onload();
        }
    }

    // @ts-ignore
    window.Image = MyImage;
}

export function mockAudio() {
    class MyAudio {
        oncanplay: () => void = () => {};
        private _hasCalledOnCanPlay = false;

        set src(_url: string) {
            this.load();
        }

        load() {
            // Mock the load method - it should trigger oncanplay
            if (!this._hasCalledOnCanPlay) {
                this.oncanplay();
                this._hasCalledOnCanPlay = true;
            }
        }
    }

    // @ts-ignore
    window.Audio = MyAudio;
}
