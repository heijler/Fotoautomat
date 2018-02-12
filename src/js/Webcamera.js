/**
 * Represents the webcamera stream
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
    Webcamera.prototype.getPromise = function () {
        if (navigator.mediaDevices) {
            return navigator.mediaDevices.getUserMedia(this.constraints)
                .then(function (mediaStream) {
                return mediaStream;
            })
                .catch(function (err) {
                console.dir(err);
                console.log(err.name, err.message);
                var warn = new Warning(err.name);
                // if (err.name == "NotAllowedError") {
                //     warn.createWarning(err.name);
                // } else if (err.name == "NotReadableError") {
                //     warn.createWarning(err.name);
                // }
            });
        }
    };
    return Webcamera;
}());
