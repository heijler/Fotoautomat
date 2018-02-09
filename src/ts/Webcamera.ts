/**
 * Represents the webcamera stream
 */

class Webcamera {
    private constraints:WebcameraSettings;
    constructor(constraints) {
        this.constraints = constraints;
    }

    getStream():Promise <void | MediaStream> {
        if(navigator.mediaDevices) {
            return navigator.mediaDevices.getUserMedia(this.constraints)
            .then(function(mediaStream) {
                return mediaStream;
            })
            .catch(function(err){
                console.log(err.name, err.message);
            });
        }
    }
}

