/**
 * Represents the webcamera stream
 */
var Webcamera = /** @class */ (function () {
    function Webcamera(constraints) {
        this.constraints = constraints;
    }
    Webcamera.prototype.getStream = function () {
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
