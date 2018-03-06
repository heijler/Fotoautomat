var webcam;
(function (webcam) {
    /**
     * WebcameraSettings
     * Represents a video media object setting like:
     * {audio: false, video: {width: {ideal: 1280}, height: {ideal: 720}}};
     * @class WebcameraSettings
     */
    class WebcameraSettings {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        /**
         * Get the width and height
         * @param width default: 3840, ideal webcamera stream width
         * @param height default: 2160, ideal webcamera stream height
         * @TODO: new jsdoc here
         */
        constructor(width = { ideal: 3840 }, height = { ideal: 2160 }) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.audio = false;
            this.video = {};
            this.video.height = height;
            this.video.width = width;
            // this.video = width;
            // this.video.height = {ideal: height};
        }
    }
    webcam.WebcameraSettings = WebcameraSettings;
})(webcam || (webcam = {}));
