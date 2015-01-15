function initApplicationLink(runlink, downloadlink) {
    var func = null, userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") >= 0) func = checkFirefox;
    else if (userAgent.indexOf("Opera") >= 0) func = checkOpera;
    else if (userAgent.indexOf("Chrome") >= 0) func = checkChrome;
    else if (userAgent.indexOf("Safari") >= 0) func = checkSafari;
    if (func != null) {
        $(downloadlink).hide();
        $(runlink).on("click", function () {
            func(runlink, downloadlink);
            return false;
        });
    }
    else {
        $(downloadlink).show();
    }
}

function downloadConfirmation(downloadlink) {
    if (confirm("You need to install our application first. Do you really want to download it now?")) {
        document.location = $(downloadlink).attr("href");
    }
}

function checkFirefox(runlink, downloadlink) {
    var f = createFrame();
    try {
        f.contentWindow.location = $(runlink).attr("href");
    }
    catch (e) {
        downloadConfirmation(downloadlink);
    }
    deleteFrame(f);
}

function checkOpera(runlink, downloadlink) {
    var f = createFrame();
    f.contentWindow.location = $(runlink).attr("href");
    setTimeout(function () {
        try {
            if (f.contentWindow.location != "something") {
            }
        }
        catch (e) {
            downloadConfirmation(downloadlink);
        }
        deleteFrame(f);
    }, 0);
}

function createFrame() {
    var f = document.createElement("iframe");
    f.style.display = "none";
    return document.body.appendChild(f);
}

function deleteFrame(f) {
    document.body.removeChild(f);
}

function checkSafari(runlink, downloadlink) {
    if (navigator.userAgent.indexOf("Windows") >= 0) {
        var w = window.open($(runlink).attr("href"), "", "width=50, height=50");
        setTimeout(function () {
            try {
                if (w.location != "about:blank") {
                }
                w.close();
                window.focus();
            }
            catch (e) {
                w.close();
                window.focus();
                downloadConfirmation(downloadlink);
            }
        }, 1000);
    }
    else {
        document.location = $(runlink).attr("href");
        setTimeout(function () {
            if (window.isFocused) downloadConfirmation(downloadlink);
        }, 1000);
    }
}

window.isFocused = true;
$(window).on("focus", function () {
    window.isFocused = true;
}).on("blur", function () {
        window.isFocused = false;
    });

function checkChrome(runlink, downloadlink) {
    document.location = $(runlink).attr("href");
    setTimeout(function () {
        if (window.isFocused) downloadConfirmation(downloadlink);
    }, 1000);
}

$(document).ready(function() {
    initApplicationLink(".runlink", ".downloadlink");
});