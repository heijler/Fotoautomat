/**
 * Main Class
 */
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.init = function () {
        console.log("Main.init");
        var pb = new Photobooth();
    };
    Main.canvas = null;
    Main.video = null;
    Main.videoFeed = null;
    Main.constraints = null;
    return Main;
}());
window.addEventListener("load", Main.init, false);
