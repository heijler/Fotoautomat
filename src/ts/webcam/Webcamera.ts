namespace webcam {
    /**
     * Webcamera
     * Represents the webcamera stream.
     * @class Webcamera
     */
    export class Webcamera {
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
    
        /**
         * getPromise
         * Returns the promise that is returned from mediaDevices.getUserMedia().
         * @returns {(Promise <void | MediaStream>)} 
         * @memberof Webcamera
         */
        getPromise():Promise <void | MediaStream> {
            if(navigator.mediaDevices) {
                return navigator.mediaDevices.getUserMedia(this.constraints)
                .then(function(mediaStream) {
                    return mediaStream;
                })
                .catch(function(err){
                    // console.dir(err);
                    console.error(err.name, err.message);
                    var warn = new utils.Warning(err.name);
                });
            } else {
                var warn = new utils.Warning("one"); // @FIX bra varning
            }
        }
    }
}

