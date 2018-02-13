/**
 * Main
 * @abstract
 * @class Main
 */

// Using abstract class to prevent instantiation wrong?
// https://stackoverflow.com/a/13222267
abstract class Main {

    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    static canvas:HTMLCanvasElement = null;
    static video:HTMLVideoElement = null;
    static constraints:WebcameraSettings = null;
    static warningElement:HTMLElement = null;

    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------

    /**
     * init
     * Assigns DOM-element references to properties and instantiates the photobooth
     * @static
     * @memberof Main
     */
    static init():void {
        Main.canvas = document.getElementsByTagName("canvas")[0];
        Main.canvas.height = 720;
        Main.canvas.width = 576;
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 800);
        Main.warningElement = document.getElementById("warning");
        
        var pb:Photobooth = new Photobooth();
        var timeout = setTimeout(pb.saveImage, 5000);
    }
}
window.addEventListener("load", Main.init, false);