/**
 * Base class that provides a way to add/remove listeners, and dispatch events.
 */
export default class EventDispatcher {
    protected _listeners: {
        [type: string]: ((data: any) => void)[];
    };

    constructor() {
        this._listeners = {};
    }

    /**
     * 'listener' will receive a 'data' argument when its called.
     * What 'data' is, depends on the event type.
     *
     * @param type Type of the event.
     * @param listener A function to be called when the event is dispatched.
     * @return If it was successfully added.
     */
    addEventListener(type: string, listener: (data: any) => void) {
        if (!this._listeners[type]) {
            this._listeners[type] = [];
        }

        if (this._listeners[type].indexOf(listener) < 0) {
            this._listeners[type].push(listener);
            return true;
        }

        return false;
    }

    /**
     * Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).
     *
     * @param type The event type.
     * @param listener The listener function to remove. If not provided then remove all the functions associated with the event type.
     * @return If it was successfully removed.
     */
    removeEventListener(type: string, listener?: (data: any) => any) {
        if (this._listeners[type]) {
            if (typeof listener !== "undefined") {
                var index = this._listeners[type].indexOf(listener);

                if (index >= 0) {
                    this._listeners[type].splice(index, 1);
                    return true;
                }
            } else {
                this._listeners[type] = [];
                return true;
            }
        }

        return false;
    }

    /**
     * Remove all the event listeners.
     */
    removeAllEventListeners() {
        this._listeners = {};
    }

    /**
     * Dispatches an event, which will trigger the listeners of that event.
     *
     * @param type Type of the event to dispatch.
     * @param data Data to be sent to every listener.
     */
    dispatchEvent(type: string, data?: any) {
        var listeners = this._listeners[type];

        if (listeners) {
            for (var a = listeners.length - 1; a >= 0; a--) {
                listeners[a](data);
            }
        }
    }

    /**
     * Check if there are listeners to a particular event type.
     *
     * @param type The event type to check.
     * @return If there are listeners or not.
     */
    hasListeners(type: string) {
        if (this._listeners[type] && this._listeners[type].length > 0) {
            return true;
        }

        return false;
    }
}
