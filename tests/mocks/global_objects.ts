export function mockXHR(response, status = 200) {
    const eventListeners = {};

    const mock = function () {
        this.open = jest.fn();
        this.addEventListener = jest.fn((type, listener) => {
            eventListeners[type] = listener;
        });
        this.send = jest.fn(() => {
            eventListeners["progress"].call(
                this,
                new ProgressEvent("progress")
            );
            eventListeners["load"].call(this);
        });
        this.status = status;
        this.response = response;
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
        onload;

        set src(url) {
            this.onload();
        }
    }

    // @ts-ignore
    window.Image = MyImage;
}

export function mockAudio() {
    class MyAudio {
        oncanplay;

        set src(url) {
            this.oncanplay();
        }
    }

    // @ts-ignore
    window.Audio = MyAudio;
}
