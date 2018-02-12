/**
 * Main Class
 */
// Using an abstract class to make sure the class can't be instantiated, wrong or not?
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
