var isTouchDevice = !!("ontouchstart" in window);
var docBody = document.getElementsByTagName("body") [0];
if (isTouchDevice) {
    docBody.className = "touch";
}
