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
            Main.ui = new ui.PhotoboothUI();
            Main.ui.init();
            var constraints = new webcam.WebcameraSettings();
            var pb = new photobooth.Photobooth(constraints, Main.numPhotos);
            // This should listen for Coin.INSERT_EVENT.. 
            Main.ui.coinSlot.addEventListener("coin-insert", function (event) {
                Main.ui.start.children[0].className = "startButton-active";
            });
            Main.ui.start.children[0].addEventListener("start-pressed", function (event) {
                // console.log("Startbutton was pressed");
                pb.saveImage();
            });
        }
    }
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------
    Main.ui = null;
    Main.numPhotos = 4;
    photobooth.Main = Main;
})(photobooth || (photobooth = {}));
window.addEventListener("load", photobooth.Main.init, false);
