const modelUrl = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let pitch;
let audioContext;
let mic;

function setup() {
    audioContext = new AudioContext();
    pitch = ml5.pitchDetection(
        modelUrl,
        audioContext,
        MicStream,
        modelLoaded
    );
}

function modelLoaded() {
    console.log('Model has been loaded');
}