/**
 * Main
 * @abstract
 * @class Main
 */
// Using abstract class to prevent instantiation wrong?
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
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 800);
        Main.warningElement = document.getElementById("warning");
        var pb = new Photobooth();
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
