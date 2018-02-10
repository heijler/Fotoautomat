/**
 * Represents a video media object setting.
 * ex. { audio: false, video: { width: 1280, height: 720 } };
 */
var WebcameraSettings = /** @class */ (function () {
    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------
    function WebcameraSettings(width, height) {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        this.audio = false;
        this.video = {};
        this.video.width = width;
        this.video.height = height;
    }
    return WebcameraSettings;
}());
