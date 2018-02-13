/**
 * Main
 * @abstract
 * @class Main
 */
// Using abstract class to prevent instantiation wrong?
// https://stackoverflow.com/a/13222267
var Main = /** @class */ (function () {
    function Main() {
    }
    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------
    /**
     * init
     * Assigns DOM-element references to properties and instantiates the photobooth
     * @static
     * @memberof Main
     */
    Main.init = function () {
        Main.canvas = document.getElementsByTagName("canvas")[0];
        Main.canvas.height = 720;
        Main.canvas.width = 576;
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 800);
        Main.warningElement = document.getElementById("warning");
        var pb = new Photobooth();
        var timeout = setTimeout(pb.saveImage, 5000);
    };
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------
    Main.canvas = null;
    Main.video = null;
    Main.constraints = null;
    Main.warningElement = null;
    return Main;
}());
window.addEventListener("load", Main.init, false);
