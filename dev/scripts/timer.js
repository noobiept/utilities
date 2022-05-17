import * as Utilities from "../build/utilities.js";

let MESSAGE_TIMEOUT;

window.onload = function () {
    const timerElement = document.querySelector("#Timer");
    const endCallback = function () {
        showMessage("Timer end!");
    };
    const tickCallback = function () {
        console.log("tick");
    };

    const timer = new Utilities.Timer({
        updateElement: {
            element: timerElement,
        },
    });

    MESSAGE_TIMEOUT = new Utilities.Timeout();

    // menu //
    const menu = document.querySelector("#Menu");

    const startValue = menu.querySelector("#StartValue");
    const withEndValue = menu.querySelector("#WithEndValue");
    const endValue = menu.querySelector("#EndValue");
    const countDown = menu.querySelector("#CountDown");

    const start = menu.querySelector("#Start");

    start.onclick = function () {
        let end = null;

        if (withEndValue.checked === true) {
            end = parseFloat(endValue.value) * 1000;
        }

        const start = parseFloat(startValue.value) * 1000;
        const down = countDown.checked;

        timer.start({
            startValue: start,
            endValue: end,
            onEnd: endCallback,
            onTick: tickCallback,
            countDown: down,
        });
        showMessage("Start!");
    };

    const restart = menu.querySelector("#Restart");

    restart.onclick = function () {
        timer.restart();
        showMessage("Restart!");
    };

    const resume = menu.querySelector("#Resume");

    resume.onclick = function () {
        timer.resume();
        showMessage("Resume!");
    };

    const stop = menu.querySelector("#Stop");

    stop.onclick = function () {
        timer.stop();
        showMessage("Stop!");
    };

    const reset = document.querySelector("#Reset");

    reset.onclick = function () {
        timer.reset();
        showMessage("Reset!");
    };

    const getTimeString = document.querySelector("#GetTimeString");

    getTimeString.onclick = function () {
        showMessage(timer.getTimeString());
    };

    const getTimeSeconds = document.querySelector("#GetTimeSeconds");

    getTimeSeconds.onclick = function () {
        showMessage(timer.getTimeSeconds());
    };

    const timerFormat = document.getElementById("TimerFormat");
    timerFormat.onchange = (e) => {
        switch (e.target.value) {
            case "string":
                timer.setUpdateFormat({
                    format: "string",
                });
                break;

            case "daytime":
                timer.setUpdateFormat({
                    format: "daytime",
                });
                break;

            case "partial_daytime":
                timer.setUpdateFormat({
                    format: "partial_daytime",
                });
                break;

            case "custom":
                timer.setUpdateFormat((timer) => {
                    return timer.getTimeMilliseconds() + " ms";
                });
                break;
        }
    };
};

function showMessage(message) {
    const messageElement = document.querySelector("#Message");

    messageElement.innerHTML = message;

    MESSAGE_TIMEOUT.start(function () {
        messageElement.innerHTML = "---";
    }, 1000);

    console.log(message);
}
