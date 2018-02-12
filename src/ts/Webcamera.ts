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

    getPromise():Promise <void | MediaStream> {
        if(navigator.mediaDevices) {
            return navigator.mediaDevices.getUserMedia(this.constraints)
            .then(function(mediaStream) {
                return mediaStream;
            })
            .catch(function(err){
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
    }
}

