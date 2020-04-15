export function createMockXHR(response) {
    const eventListeners = {};

    return function () {
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
}
