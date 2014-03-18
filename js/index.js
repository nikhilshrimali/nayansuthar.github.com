var introPage = document.querySelector (".intro-page");
var introFixedBox = document.querySelector (".intro-page .fixed-box");
var introLink = document.querySelector (".intro-page .intro-link");
var workLink = document.querySelector (".intro-page .work-link");


//----- Adjust page
var adjustPage = function () {
  var winHt = window.innerHeight;
  var winWdt = window.innerWidth;
  introFixedBox.style.height = winHt + "px";
  introFixedBox.style.width = winWdt + "px";
}
adjustPage ();
window.addEventListener('resize', function(e){ adjustPage () });


//----- Toggle Intro View
workLink.addEventListener ("click", function () {
  introPage.className = introPage.className + " accelerate";
  introPage.setAttribute ("data-view", "collapsed");
  setTimeout (function () {
    introPage.className = introPage.className.replace (" accelerate", "");
  }, 800);
}, false);

introLink.addEventListener ("click", function () {
  introPage.className = introPage.className + " accelerate";
  introPage.setAttribute ("data-view", "full");
  setTimeout (function () {
    introPage.className = introPage.className.replace (" accelerate", "");
  }, 800);
}, false);
