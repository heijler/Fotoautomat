/**
 * Represents a video media object setting.
 * ex. { audio: false, video: { width: 1280, height: 720 } };
 */
var WebcameraSettings = /** @class */ (function () {
    function WebcameraSettings(width, height) {
        this.audio = false;
        this.video = {};
        this.video.width = width;
        this.video.height = height;
    }
    return WebcameraSettings;
}());
