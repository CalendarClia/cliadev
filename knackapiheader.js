// Check for IE
if (GetIEVersion() > 0){
  window.alert("You are running IE. This browser is NOT supported for CLIA VEP Application Process. Please use Chrome, Firefox or Safari.");
  window.location("https://clia.ca/voluntary-excess-program.html");
}

function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}

// Localizejs Translation Code
LazyLoad.js(['https://global.localizecdn.com/localize.js'], function () {
  !function (a) { if (!a.Localize) { a.Localize = {}; for (var e = ["translate", "untranslate", "phrase", "initialize", "translatePage", "setLanguage", "getLanguage", "detectLanguage", "getAvailableLanguages", "untranslatePage", "bootstrap", "prefetch", "on", "off"], t = 0; t < e.length; t++)a.Localize[e[t]] = function () { } } }(window);

  Localize.initialize({
    key: 'OoHqlrh1RISgX',
    rememberLanguage: true,
    saveNewPhrases: false
  });
  /*Localize.initialize({
    key: 'OoHqlrh1RISgX',
    rememberLanguage: true
  });*/
});

// Sweet alert JavaScript Library load
LazyLoad.js(src = "https://cdn.jsdelivr.net/npm/sweetalert2@8");

// Load CLIA Customized JavaScript Code
KnackInitAsync = function ($, callback) {
  window.$ = $;
  LazyLoad.js(["https://cdn.jsdelivr.net/gh/calendarclie/cliadev@1.00/cliajavascript.js"], function() {
    console.log('Loaded external files!');
      callback();
  });
}
