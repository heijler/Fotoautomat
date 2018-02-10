/**
 * Represents the webcamera stream
 */

class Webcamera {
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    private constraints:WebcameraSettings;

    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------

    constructor(constraints:WebcameraSettings) {
        this.constraints = constraints;
    }

    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------

    // @TODO: Return the MediaStream and not the promise itself, lookup how to handle waiting for promises when calling the function that contains it.
    getPromise():Promise <void | MediaStream> {
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

