/** 
 * Represents a video media object setting.
 * ex. { audio: false, video: { width: 1280, height: 720 } };
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