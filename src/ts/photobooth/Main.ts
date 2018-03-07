namespace photobooth {
    /**
     * Main
     * @class Main
     */
    
    export class Main {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        public static ui:ui.PhotoboothUI = null;
    
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    
        /**
         * init
         * Assigns DOM-element references to properties and instantiates the photobooth
         * @static
         * @memberof Main
         */
        public static init():void {
            // photobooth.Main.canvas.height = 720; // dynamiskt
            // photobooth.Main.canvas.width  = 576; // dynamiskt

            // photobooth.Main.constraints  = new webcam.WebcameraSettings();
            // var pb:photobooth.Photobooth = new photobooth.Photobooth();
            // // var timeout = setTimeout(pb.saveImage, 5000);
            Main.ui = new ui.PhotoboothUI();
            Main.ui.init();

            var constraints:webcam.WebcameraSettings = new webcam.WebcameraSettings();
            var pb:photobooth.Photobooth = new photobooth.Photobooth(constraints);

        }
    }

}
window.addEventListener("load", photobooth.Main.init, false);