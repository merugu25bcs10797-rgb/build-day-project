// Enable Speech Recognition API
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

var output = document.getElementById("textOutput");
var notesDiv = document.getElementById("savedNotes");

// Start listening
document.getElementById("startBtn").onclick = function () {
    recognition.start();
};

// Stop listening
document.getElementById("stopBtn").onclick = function () {
    recognition.stop();
};

// Speech results
recognition.onresult = function (event) {
    var text = event.results[event.results.length - 1][0].transcript;
    output.value = text;
};

// Save note
document.getElementById("saveBtn").onclick = function () {
    if (output.value.trim() === "") return;

    var note = document.createElement("div");
    note.className = "note";
    note.innerText = output.value;

    notesDiv.appendChild(note);
    output.value = "";
};