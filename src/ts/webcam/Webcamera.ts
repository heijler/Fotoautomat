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
         * @memberof Webcamera
         */
        public getCamera():Promise <any> {
            if(navigator.mediaDevices) {
                return navigator.mediaDevices.getUserMedia(this.constraints)
                .then(function(mediaStream:MediaStream) {
                    // @TODO: Get settings and do stuff here! Set canvas and video element sizes.
                    var temp = mediaStream.getTracks();
                    var temp2 = temp[0].getConstraints();
                    var temp4 = temp[0].getSettings();
                    console.log("getContraints", temp2);
                    console.log("getSettings", temp4);
                    return mediaStream;
                })
                .catch(function(err:Error){
                    // console.error(err.name, err.message);
                    var warn = new alert.UserWarning(err);
                });
            }
        }

        /**
         * 
         * 
         * @returns {MediaStream} 
         * @memberof Webcamera
         */
        public async getStreamPromise():Promise<MediaStream> {
            return await this.getCamera();
            // var promise:Promise <void | MediaStream> = this.getPromise();
            // return promise.then((stream:MediaStream) => {
            //     return stream;
            // })
            // .catch((err) => {
            //     return err;
            // });
        }
    }
}

