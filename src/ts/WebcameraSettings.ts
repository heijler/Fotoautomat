/**
 * WebcameraSettings
 * Represents a video media object setting.
 * Ex. { audio: false, video: { width: 1280, height: 720 } };
 * @class WebcameraSettings
 */
class WebcameraSettings {

    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    public audio:boolean|MediaTrackConstraints = false;
    public video = {} as any;

    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------

    constructor(width, height) {
        this.video.width = width;
        this.video.height = height;
    }   
}