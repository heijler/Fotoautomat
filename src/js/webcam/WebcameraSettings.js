var webcam;
(function (webcam) {
    /**
     * WebcameraSettings
     * Represents a video media object setting like:
     * {audio: false, video: {width: {ideal: 1280}, height: {ideal: 720}}};
     * @class WebcameraSettings
     */
    var WebcameraSettings = /** @class */ (function () {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        /**
         * Get the width and height
         * @param width default: 3840, ideal webcamera stream width
         * @param height default: 2160, ideal webcamera stream height
         */
        function WebcameraSettings(width, height) {
            if (width === void 0) { width = 3840; }
            if (height === void 0) { height = 2160; }
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.audio = false;
            this.video = {};
            this.video.width = { ideal: width };
            this.video.height = { ideal: height };
        }
        return WebcameraSettings;
    }());
    webcam.WebcameraSettings = WebcameraSettings;
})(webcam || (webcam = {}));
