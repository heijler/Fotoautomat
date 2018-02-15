namespace photobooth {
    /**
     * Main
     * @abstract
     * @class Main
     */
    
    export class Main {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        static canvas:HTMLCanvasElement = null;
        static video:HTMLVideoElement = null;
        static constraints:webcam.WebcameraSettings = null;
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
            photobooth.Main.video = document.getElementsByTagName("video")[0];
            photobooth.Main.warningElement = document.getElementById("warning");
            photobooth.Main.canvas = document.getElementsByTagName("canvas")[0];
            
            photobooth.Main.canvas.height = 720; // dynamiskt
            photobooth.Main.canvas.width  = 576; // dynamiskt

            photobooth.Main.constraints  = new webcam.WebcameraSettings();
            var pb:photobooth.Photobooth = new photobooth.Photobooth();
            var timeout = setTimeout(pb.saveImage, 5000);
        }
    }

}
window.addEventListener("load", photobooth.Main.init, false);