/**
 * Main Class
 */
var Main = /** @class */ (function () {
    function Main() {
    }
    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------
    Main.init = function () {
        Main.canvas = document.getElementsByTagName("canvas")[0];
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 720);
        console.log("Main.init");
        var pb = new Photobooth();
    };
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------
    Main.canvas = null;
    Main.video = null;
    // static videoFeed:Promise <void | MediaStream> = null; //Maybe change this so that videoFeed would be the mediaStream and that the promise would be resolved locally and not for this static class.
    Main.constraints = null;
    return Main;
}());
window.addEventListener("load", Main.init, false);
