interface ListenerEntry {
    listener: (data: any) => void;
    removed: boolean; // so a dispatch that is going on doesn't call it anymore (even if the same listener is added again)
}

/**
 * Base class that provides a way to add/remove listeners, and dispatch events.
 *
 * Basic Usage:
 *     import { EventDispatcher } from '@drk4/utilities';
 *
 *     type MyEvent = 'anEvent' | 'somethingElse';
 *
 *     class MyClass extends EventDispatcher<MyEvent> {
 *         // (...)
 *         onClick() {
 *             this.dispatchEvent('anEvent', { something: 'here' });
 *         }
 *     }
 *
 *     const instance = new MyClass();
 *     instance.addEventListener('anEvent', somethingToDo);
 */
export class EventDispatcher<EventType extends string> {
    private _listeners: {
        [E in EventType]?: ListenerEntry[];
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
    addEventListener(type: EventType, listener: (data: any) => void) {
        const entries = (this._listeners[type] ??= []);

        if (entries.some((entry) => entry.listener === listener)) {
            return false;
        }

        entries.push({ listener, removed: false });
        return true;
    }

    /**
     * Removes a specific listener of an event type, or all the listeners for that type (if 'listener' is not provided).
     *
     * @param type The event type.
     * @param listener The listener function to remove. If not provided then remove all the functions associated with the event type.
     * @return If it was successfully removed.
     */
    removeEventListener(type: EventType, listener?: (data: any) => any) {
        const entries = this._listeners[type];

        if (entries) {
            if (typeof listener !== "undefined") {
                const index = entries.findIndex(
                    (entry) => entry.listener === listener
                );

                if (index >= 0) {
                    entries[index].removed = true;
                    entries.splice(index, 1);
                    return true;
                }
            } else {
                entries.forEach((entry) => (entry.removed = true));
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
        for (const entries of Object.values<ListenerEntry[] | undefined>(
            this._listeners
        )) {
            entries?.forEach((entry) => (entry.removed = true));
        }

        this._listeners = {};
    }

    /**
     * Dispatches an event, which will trigger the listeners of that event (in the order they were added).
     * Like with the DOM events, a listener added during the dispatch is only called on the next one, and a listener removed during the dispatch isn't called.
     *
     * @param type Type of the event to dispatch.
     * @param data Data to be sent to every listener.
     */
    dispatchEvent(type: EventType, data?: any) {
        const entries = this._listeners[type];

        if (entries) {
            // go through a copy, so adding/removing listeners from within a listener doesn't skip or repeat any of the others
            for (const entry of entries.slice()) {
                if (!entry.removed) {
                    entry.listener(data);
                }
            }
        }
    }

    /**
     * Check if there are listeners to a particular event type.
     *
     * @param type The event type to check.
     * @return If there are listeners or not.
     */
    hasListeners(type: EventType) {
        const entries = this._listeners[type];

        if (entries && entries.length > 0) {
            return true;
        }

        return false;
    }
}
