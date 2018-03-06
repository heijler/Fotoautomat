var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var webcam;
(function (webcam) {
    /**
     * Webcamera
     * Represents the webcamera stream.
     * @class Webcamera
     */
    class Webcamera {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(constraints) {
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
        getCamera() {
            if (navigator.mediaDevices) {
                return navigator.mediaDevices.getUserMedia(this.constraints)
                    .then(function (mediaStream) {
                    // @TODO: Get settings and do stuff here! Set canvas and video element sizes.
                    // var temp = mediaStream.getTracks();
                    // var temp2 = temp[0].getConstraints();
                    // var temp4 = temp[0].getSettings();
                    // console.log("getContraints", temp2);
                    // console.log("getSettings", temp4);
                    return mediaStream;
                })
                    .catch(function (err) {
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
        getStreamPromise() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.getCamera();
                // var promise:Promise <void | MediaStream> = this.getPromise();
                // return promise.then((stream:MediaStream) => {
                //     return stream;
                // })
                // .catch((err) => {
                //     return err;
                // });
            });
        }
    }
    webcam.Webcamera = Webcamera;
})(webcam || (webcam = {}));
