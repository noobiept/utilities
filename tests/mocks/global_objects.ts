export function mockXHR(response) {
    const eventListeners = {};

    const mock = function () {
        this.open = jest.fn();
        this.addEventListener = jest.fn((type, listener) => {
            eventListeners[type] = listener;
        });
        this.send = jest.fn(() => {
            eventListeners["load"].call(this);
        });
        this.status = 200;
        this.response = JSON.stringify(response ?? {});
    };

    // @ts-ignore
    window.XMLHttpRequest = mock;
}

export function mockURL() {
    // @ts-ignore
    window.URL = {
        createObjectURL: jest.fn(() => "asd"),
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
