var photobooth;
(function (photobooth) {
    /**
     * Main
     * @abstract
     * @class Main
     */
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
            photobooth.Main.video = document.getElementsByTagName("video")[0];
            photobooth.Main.warningElement = document.getElementById("warning");
            photobooth.Main.canvas = document.getElementsByTagName("canvas")[0];
            photobooth.Main.canvas.height = 720; // dynamiskt
            photobooth.Main.canvas.width = 576; // dynamiskt
            photobooth.Main.constraints = new webcam.WebcameraSettings();
            var pb = new photobooth.Photobooth();
            var timeout = setTimeout(pb.saveImage, 5000);
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
    photobooth.Main = Main;
})(photobooth || (photobooth = {}));
window.addEventListener("load", photobooth.Main.init, false);
