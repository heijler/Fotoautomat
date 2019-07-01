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
         */
        static init() {
            Main.ui = new ui.PhotoboothUI();
            Main.ui.init();
            var constraints = new webcam.WebcameraSettings();
            var pb = new photobooth.Photobooth(constraints, Main.numPhotos, 500);
            Main.ui.coinSlot.addEventListener("coin-insert", function (event) {
                Main.ui.start.children[0].className = "startButton-active";
            });
            Main.ui.start.children[0].addEventListener("start-pressed", function (event) {
                pb.captureImages();
                Main.ui.start.children[0].className = "startButton-inactive";
            });
            Main.ui.export.addEventListener("photostrip-generated", function (event) {
                console.log("photostrip generated");
            });
            Main.ui.export.addEventListener("save-pdf", function () {
                pb.savePhotostripPDF();
            });
            Main.ui.export.addEventListener("print-pdf", function () {
                pb.printPhotostripPDF();
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
