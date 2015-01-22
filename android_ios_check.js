$(document).ready(function() {
    setTimeout(function() {
        if (isIOS()) {
            setTimeout(function () { window.location = "https://itunes.apple.com/fr/app/e-loue/id427538545"; }, 25);
            window.location = "twitter://";
        }
        else if (isAndroid()) {

        }
    }, 5000);

});

function isIOS() {
    return /iPhone|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}