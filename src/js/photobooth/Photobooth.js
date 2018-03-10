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
    }
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
