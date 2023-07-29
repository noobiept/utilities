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
            eventListeners["load"].call(this);
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

        set src(_url: string) {
            this.oncanplay();
        }
    }

    // @ts-ignore
    window.Audio = MyAudio;
}
