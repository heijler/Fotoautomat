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
    // @TODO: Return the MediaStream and not the promise itself, lookup how to handle waiting for promises when calling the function that contains it.
    Webcamera.prototype.getPromise = function () {
        if (navigator.mediaDevices) {
            return navigator.mediaDevices.getUserMedia(this.constraints)
                .then(function (mediaStream) {
                return mediaStream;
            })
                .catch(function (err) {
                console.log(err.name, err.message);
            });
        }
    };
    return Webcamera;
}());
