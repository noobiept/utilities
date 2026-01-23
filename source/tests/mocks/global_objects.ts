/* eslint-disable @typescript-eslint/ban-ts-comment */
export function mockXHR(response: any, status = 200) {
    const eventListeners: {
        [key: string]: (args?: any) => unknown;
    } = {};

    const mock = function (this: XMLHttpRequest) {
        this.open = jest.fn();
        this.addEventListener = jest.fn((type, listener) => {
            eventListeners[type] = listener as (args?: any) => unknown;
        });
        this.send = jest.fn(() => {
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
        createObjectURL: jest.fn(() => "asd"),
        revokeObjectURL: jest.fn(),
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
