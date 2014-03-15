var winHt = window.innerHeight;
var winWdt = window.innerWidth;


var introPage = document.querySelector (".intro-page");
var introFixedBox = document.querySelector (".intro-page .fixed-box");
var workPage = document.querySelector (".work-page");
var introLink = document.querySelector (".intro-page .intro-link");
var workLink = document.querySelector (".intro-page .work-link");

var workScrollTimer = null;


//----- Adjust page
var adjustPage = function () {
  winHt = window.innerHeight;
  winWdt = window.innerWidth;
  introFixedBox.style.height = winHt + "px";
  introFixedBox.style.width = winWdt + "px";
}
adjustPage ();
window.addEventListener('resize', function(e){ adjustPage () });


//----- Switch between screens
workLink.addEventListener ("click", function () {
  introPage.className = introPage.className + " accelerate";
  introPage.setAttribute ("data-view", "collapsed");
  setTimeout (function () {
    introPage.className = introPage.className.replace (" accelerate", "");
  }, 300);
}, false);

introLink.addEventListener ("click", function () {
  introPage.className = introPage.className + " accelerate";
  introPage.setAttribute ("data-view", "full");
  setTimeout (function () {
    introPage.className = introPage.className.replace (" accelerate", "");
  }, 300);
}, false);


//----- Scrolling on Work Page
workPage.addEventListener ("scroll", function (evt) {
  if ( workScrollTimer ) {
    clearTimeout (workScrollTimer);
  }
  workScrollTimer = setTimeout (function () {
    var page = Math.round ( workPage.scrollTop / workPage.offsetHeight );
    var scrollAnim = function () {
      if (workPage.scrollTop < page * workPage.offsetHeight) {
        workPage.scrollTop += ( page*workPage.offsetHeight - workPage.scrollTop ) /2;
        if ( (page*workPage.offsetHeight - workPage.scrollTop)/2 < 1) {
          workPage.scrollTop = page*workPage.offsetHeight;
        }
      }
      else if (workPage.scrollTop > page * workPage.offsetHeight) {
        workPage.scrollTop -= (workPage.scrollTop - page*workPage.offsetHeight) /2;
        if ( (workPage.scrollTop - page*workPage.offsetHeight)/2 < 1) {
          workPage.scrollTop = page*workPage.offsetHeight;
        }
      }
      if ( workPage.scrollTop !== page * workPage.offsetHeight ) {
        console.log ("scrollAnim");
        setTimeout (function () { scrollAnim () }, 5)
      }
    }
    scrollAnim ();
  }, 150);
}, false);
