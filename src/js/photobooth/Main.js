var photobooth;
(function (photobooth) {
    /**
     * Main
     * @class Main
     */
    class Main {
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        /**
         * init
         * Assigns DOM-element references to properties and instantiates the photobooth
         * @static
         * @memberof Main
         */
        static init() {
            // photobooth.Main.canvas.height = 720; // dynamiskt
            // photobooth.Main.canvas.width  = 576; // dynamiskt
            // photobooth.Main.constraints  = new webcam.WebcameraSettings();
            // var pb:photobooth.Photobooth = new photobooth.Photobooth();
            // // var timeout = setTimeout(pb.saveImage, 5000);
            Main.ui = new ui.PhotoboothUI();
            Main.ui.init();
            var constraints = new webcam.WebcameraSettings();
            var pb = new photobooth.Photobooth(constraints);
        }
    }
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------
    Main.ui = null;
    photobooth.Main = Main;
})(photobooth || (photobooth = {}));
window.addEventListener("load", photobooth.Main.init, false);
