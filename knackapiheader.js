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

// Debug on (1) or off (0)
const debug_on = 1;

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

// Clia Variables
const integromatSimilarityKeyUrl = 'https://hook.integromat.com/rc148bratqo8k2f20ml8oyrkybfxoqaf';
const integromatApplicationApproveUrl = 'https://hook.integromat.com/hnhcj7fw32vjgef7ov8ixiz8ab463v7k';
const integromatCertificateApproveUrl = 'https://hook.integromat.com/fcdk6d818l3ullql6h0bvpx2rpruz72f';
const integromatCreateCertificateUrl = 'https://hook.integromat.com/va4jvzewliusxrxowhuywiq4cktusudo';

LazyLoad.js(src = "https://cdn.jsdelivr.net/gh/calendarclie/cliadev@1.01/knackappvariables.js");

// Load CLIA Customized JavaScript Code
KnackInitAsync = function ($, callback) {
  window.$ = $;
  LazyLoad.js(["https://cdn.jsdelivr.net/gh/calendarclie/cliadev@1.01/cliajavascript.js"], function() {
    console.log('Loaded external files!');
      callback();
  });
}
