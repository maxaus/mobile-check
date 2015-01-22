$(document).ready(function() {
    setTimeout(function() {
        if (isIOS()) {
            setTimeout(function () { window.location = "https://itunes.apple.com/fr/app/e-loue/id427538545"; }, 25);
            window.location = "twitter://";
        }
        else if (isAndroid()) {
            window.open('intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end', '_blank');
        }
    }, 5000);

});

function debug(txt) {
    $('body').append("<div style='width:300px;background:orange;padding:3px;font-size:13px'>" + txt + "</div>");
}

function isIOS() {
    return /iPhone|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}