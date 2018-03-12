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
    
        public constructor(constraints:WebcameraSettings) {
            this.constraints = constraints;
        }
    
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    
        /**
         * getCamera
         * Returns the promise that is returned from mediaDevices.getUserMedia().
         * @returns {(Promise <void | MediaStream>)} 
         */
        private getCamera():Promise <any> {
            if(navigator.mediaDevices) {
                return navigator.mediaDevices.getUserMedia(this.constraints)
                .then(function(mediaStream:MediaStream) {
                    return mediaStream;
                })
                .catch(function(err:Error){
                    console.log(err);
                    var warn = new alert.UserWarning(err);
                });
            }
        }

        /**
         * getStreamPromise
         * Returns the promise which will resolve to the stream
         * @returns {Promise<MediaStream>} 
         */
        public async getStreamPromise():Promise<MediaStream> {
            return await this.getCamera();
        }
    }
}

