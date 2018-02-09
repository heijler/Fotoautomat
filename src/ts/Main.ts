/**
 * Main Class
 */

abstract class Main {

    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    static canvas:HTMLElement = null;
    static video:HTMLVideoElement = null;
    static videoFeed:Promise <void | MediaStream> = null; //Maybe change this so that videoFeed would be the mediaStream and that the promise would be resolved locally and not for this static class.
    static constraints:WebcameraSettings = null;

    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------

    static init():void {
        console.log("Main.init");
        var pb:Photobooth = new Photobooth();
    }

}
window.addEventListener("load", Main.init, false);