import { Preload } from "../build/utilities.esm.js";

window.onload = () => {
    const preload = new Preload();
    preload.addEventListener("complete", (data) => {
        const json = preload.get("json");
        const image = preload.get("image");
        const text = preload.get("text");
        const audioMp3 = preload.get("audio-mp3");
        const audioOgg = preload.get("audio-ogg");

        console.log(json, image, text, audioMp3, audioOgg);

        document.getElementById("Json").innerText = json.ok;
        document.getElementById("Image").appendChild(image);
        document.getElementById("Text").innerText = text;

        if (audioMp3) {
            audioMp3.controls = true;
            document.getElementById("Audio-mp3").appendChild(audioMp3);
        }

        // not all browsers support ogg, so check if it worked before adding
        if (audioOgg) {
            audioOgg.controls = true;
            document.getElementById("Audio-ogg").appendChild(audioOgg);
        }
    });
    preload.loadManifest([
        { id: "json", path: "../assets/test.json" },
        { id: "image", path: "../assets/image.png" },
        { id: "text", path: "../assets/text.txt" },
        { id: "audio-mp3", path: "../assets/scumm_bar.mp3" },
        { id: "audio-ogg", path: "../assets/space_ship_1.ogg" },
    ]);
};
