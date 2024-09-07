let msg = document.getElementById("message");
let but1 = document.getElementById("saveButton");
let but2 = document.getElementById("clearButton");
but1.onclick = function() {
    let value = msg.value;
    localStorage.setItem("userText", value);
}
but2.onclick = function() {
    msg.value = "";
}

let a = localStorage.getItem("userText");
if (a === null) {
    msg.value = "";
} else {
    msg.value = a;
}