var webcam;
(function (webcam) {
    /**
     * Webcamera
     * Represents the webcamera stream.
     * @class Webcamera
     */
    var Webcamera = /** @class */ (function () {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        function Webcamera(constraints) {
            this.constraints = constraints;
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        /**
         * getPromise
         * Returns the promise that is returned from mediaDevices.getUserMedia().
         * @returns {(Promise <void | MediaStream>)}
         * @memberof Webcamera
         */
        Webcamera.prototype.getPromise = function () {
            if (navigator.mediaDevices) {
                return navigator.mediaDevices.getUserMedia(this.constraints)
                    .then(function (mediaStream) {
                    return mediaStream;
                })
                    .catch(function (err) {
                    console.dir(err);
                    console.log(err.name, err.message);
                    var warn = new utils.Warning(err.name);
                });
            }
            else {
                var warn = new utils.Warning("one"); // @FIX bra varning
            }
        };
        return Webcamera;
    }());
    webcam.Webcamera = Webcamera;
})(webcam || (webcam = {}));
