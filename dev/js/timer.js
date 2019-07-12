import * as Utilities from "../../build/utilities.esm.js";

var MESSAGE_TIMEOUT;

window.onload = function() {
    var timerElement = document.querySelector("#Timer");

    var endCallback = function() {
        showMessage("Timer end!");
    };
    var tickCallback = function() {
        console.log("tick");
    };

    var timer = new Utilities.Timer(timerElement);

    MESSAGE_TIMEOUT = new Utilities.Timeout();

    // menu //
    var menu = document.querySelector("#Menu");

    var startValue = menu.querySelector("#StartValue");
    var withEndValue = menu.querySelector("#WithEndValue");
    var endValue = menu.querySelector("#EndValue");
    var countDown = menu.querySelector("#CountDown");

    var start = menu.querySelector("#Start");

    start.onclick = function() {
        var end = null;

        if (withEndValue.checked === true) {
            end = parseFloat(endValue.value) * 1000;
        }

        var start = parseFloat(startValue.value) * 1000;
        var down = countDown.checked;

        timer.start({
            startValue: start,
            endValue: end,
            endCallback: endCallback,
            tickCallback: tickCallback,
            countDown: down,
        });
        showMessage("Start!");
    };

    var restart = menu.querySelector("#Restart");

    restart.onclick = function() {
        timer.restart();
        showMessage("Restart!");
    };

    var resume = menu.querySelector("#Resume");

    resume.onclick = function() {
        timer.resume();
        showMessage("Resume!");
    };

    var stop = menu.querySelector("#Stop");

    stop.onclick = function() {
        timer.stop();
        showMessage("Stop!");
    };

    var reset = document.querySelector("#Reset");

    reset.onclick = function() {
        timer.reset();
        showMessage("Reset!");
    };

    var getTimeString = document.querySelector("#GetTimeString");

    getTimeString.onclick = function() {
        showMessage(timer.getTimeString());
    };

    var getTimeSeconds = document.querySelector("#GetTimeSeconds");

    getTimeSeconds.onclick = function() {
        showMessage(timer.getTimeSeconds());
    };
};

function showMessage(message) {
    var messageElement = document.querySelector("#Message");

    messageElement.innerHTML = message;

    MESSAGE_TIMEOUT.start(function() {
        messageElement.innerHTML = "---";
    }, 1000);

    console.log(message);
}
