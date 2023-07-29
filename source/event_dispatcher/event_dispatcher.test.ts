import { EventDispatcher } from "./event_dispatcher";

describe("EventDispatcher", () => {
    test("Basic functionality.", () => {
        const dispatcher = new EventDispatcher();
        const event = "test";
        const listener1 = jest.fn();
        const listener2 = jest.fn();

        // not listeners yet
        expect(dispatcher.hasListeners(event)).toBe(false);

        // add some listeners
        dispatcher.addEventListener(event, listener1);
        dispatcher.addEventListener(event, listener2);
        expect(dispatcher.hasListeners(event)).toBe(true);

        // they were both called
        dispatcher.dispatchEvent(event);
        expect(listener1).toHaveBeenCalled();
        expect(listener2).toHaveBeenCalled();

        // remove one of the listeners
        dispatcher.removeEventListener(event, listener1);
        expect(dispatcher.hasListeners(event)).toBe(true);

        // the listener1 only was called once (previously)
        // listener2 gets called again, so 2 in total
        dispatcher.dispatchEvent(event);
        expect(listener1).toHaveBeenCalledTimes(1);
        expect(listener2).toHaveBeenCalledTimes(2);
    });

    test("Don't add the same listener more than once.", () => {
        const dispatcher = new EventDispatcher();
        const event = "test";
        const listener = jest.fn();

        // try to add 2 times the same listener
        const added1 = dispatcher.addEventListener(event, listener);
        const added2 = dispatcher.addEventListener(event, listener);

        // only the first call worked
        expect(added1).toBe(true);
        expect(added2).toBe(false);

        // when sending an event, should only call the listener once
        dispatcher.dispatchEvent(event);
        expect(listener).toHaveBeenCalledTimes(1);
    });

    test("Should return false when trying to remove an event that doesn't exist.", () => {
        const dispatcher = new EventDispatcher();
        const event = "test";

        const removed = dispatcher.removeEventListener(event);
        expect(removed).toBe(false);
    });

    test("Should remove all listeners when removing an event without specifying any listener.", () => {
        const dispatcher = new EventDispatcher();
        const event = "test";
        const listener1 = jest.fn();
        const listener2 = jest.fn();

        dispatcher.addEventListener(event, listener1);
        dispatcher.addEventListener(event, listener2);

        expect(dispatcher.hasListeners(event)).toBe(true);

        dispatcher.removeEventListener(event);
        expect(dispatcher.hasListeners(event)).toBe(false);

        dispatcher.dispatchEvent(event);
        expect(listener1).not.toHaveBeenCalled();
        expect(listener2).not.toHaveBeenCalled();
    });

    test("Shouldn't be able to remove a listener that wasn't added.", () => {
        const dispatcher = new EventDispatcher();
        const event = "test";

        const listener1 = jest.fn();
        const listener2 = jest.fn();

        // only add the first one
        dispatcher.addEventListener(event, listener1);

        const removed = dispatcher.removeEventListener(event, listener2);
        expect(removed).toBe(false);
    });

    test("Should remove all listeners, of all types.", () => {
        const dispatcher = new EventDispatcher();
        const event1 = "test1";
        const event2 = "test2";
        const listener1 = jest.fn();
        const listener2 = jest.fn();

        dispatcher.addEventListener(event1, listener1);
        dispatcher.addEventListener(event2, listener2);

        expect(dispatcher.hasListeners(event1)).toBe(true);
        expect(dispatcher.hasListeners(event2)).toBe(true);

        dispatcher.removeAllEventListeners();

        expect(dispatcher.hasListeners(event1)).toBe(false);
        expect(dispatcher.hasListeners(event2)).toBe(false);
    });
});
