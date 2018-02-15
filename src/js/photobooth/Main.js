var photobooth;
(function (photobooth) {
    /**
     * Main
     * @abstract
     * @class Main
     */
    // Using abstract class to prevent instantiation wrong?
    // https://stackoverflow.com/a/13222267
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
            photobooth.Main.canvas = document.getElementsByTagName("canvas")[0];
            photobooth.Main.canvas.height = 720; // dynamiskt
            photobooth.Main.canvas.width = 576; // dynamiskt
            photobooth.Main.video = document.getElementsByTagName("video")[0];
            // Main.constraints = new WebcameraSettings(1280, 720);
            // Main.constraints = new WebcameraSettings({ideal: 2560}, {ideal: 1440});
            photobooth.Main.constraints = new webcam.WebcameraSettings(3840, 2160);
            // Main.constraints = new WebcameraSettings(1000, 1000);
            photobooth.Main.warningElement = document.getElementById("warning");
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
