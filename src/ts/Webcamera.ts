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
                if (err.name == "NotAllowedError") {
                    var warn = new Warning("You must allow your webcamera to be used!");
                    warn.displayWarning();
                } else if (err.name == "NotReadableError") {
                    var warn = new Warning("Webcamera is not readable, please reload and try another camera!");
                    warn.displayWarning();
                }
            });
        }
    }
}

