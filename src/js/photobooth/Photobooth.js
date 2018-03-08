var photobooth;
(function (photobooth) {
    /**
     * Photobooth
     * Represents the photobooth
     * @class Photobooth
     */
    class Photobooth {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(constraints) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.constraints = null;
            this.constraints = constraints;
            this.init();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        /**
         * Init
         * Get the promise from webcamera and resolve to video
         * @memberof Photobooth
         */
        init() {
            var cam = new webcam.Webcamera(this.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream) => {
                var reflection = new ui.Reflection(stream);
            })
                .catch((err) => {
                var warn = new alert.SystemWarning(err);
            });
        }
        /**
         * saveImage
         * Writes image data to canvas and fetches the image DataURI
         * @memberof Photobooth
         */
        saveImage() {
            var context = photobooth.Main.ui.canvas.getContext('2d');
            var img = document.getElementsByTagName("img")[1];
            // s - source
            // d - destination
            // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            context.drawImage(photobooth.Main.ui.video, 352, 0, 576, 720, 0, 0, 576, 720);
            img.src = photobooth.Main.ui.canvas.toDataURL('image/png');
            console.log("image in img-element");
        }
    }
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
