import { Preload } from "../build/utilities.esm.js";

window.onload = () => {
    const preload = new Preload();
    preload.addEventListener("complete", (data) => {
        const json = preload.get("json");
        const image = preload.get("image");
        const text = preload.get("text");
        const audio = preload.get("audio");

        audio.controls = true;

        console.log(json, image, text, audio);

        document.getElementById("Json").innerText = json.ok;
        document.getElementById("Image").appendChild(image);
        document.getElementById("Text").innerText = text;
        document.getElementById("Audio").appendChild(audio);
    });
    preload.loadManifest([
        { id: "json", path: "../assets/test.json" },
        { id: "image", path: "../assets/image.png" },
        { id: "text", path: "../assets/text.txt" },
        { id: "audio", path: "../assets/scumm_bar.mp3" },
    ]);
};
