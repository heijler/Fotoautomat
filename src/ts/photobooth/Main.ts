/**
 * Main
 * @abstract
 * @class Main
 */

// Using abstract class to prevent instantiation wrong?
abstract class Main {

    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    static canvas:HTMLElement = null;
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
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 800);
        Main.warningElement = document.getElementById("warning");
        
        var pb:Photobooth = new Photobooth();
    }
}
window.addEventListener("load", Main.init, false);