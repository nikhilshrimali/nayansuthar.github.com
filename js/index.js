var winHt = window.innerHeight;
var winWdt = window.innerWidth;


var introPage = document.querySelector (".intro-page");
var workPage = document.querySelector (".work-page");
var introFixedBox = document.querySelector (".intro-page .fixed-box");

var introLink = document.querySelector (".intro-page .intro-link");
var workLink = document.querySelector (".intro-page .work-link");

introFixedBox.style.height = winHt + "px";
introFixedBox.style.width = winWdt + "px";

workLink.addEventListener ("click", function () {
  introPage.className = introPage.className + " accelarate";
  introPage.setAttribute ("data-view", "collapsed");
  setTimeout (function () {
    introPage.className = introPage.className.replace (" accelarate", "");
  }, 250);
}, false);

introLink.addEventListener ("click", function () {
  introPage.className = introPage.className + " accelarate";
  introPage.setAttribute ("data-view", "full");
  setTimeout (function () {
    introPage.className = introPage.className.replace (" accelarate", "");
  }, 250);
}, false);
