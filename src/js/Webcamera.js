/**
 * 
 */

var Webcamera = function(constraints) {
    if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
            return mediaStream;
        })
        .catch(function(err) {
            console.log(err.name, err.message);
        });
    }
};

