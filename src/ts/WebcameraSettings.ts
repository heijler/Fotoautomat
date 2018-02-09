/** 
 * Represents a video media object setting.
 * ex. { audio: false, video: { width: 1280, height: 720 } };
 */
class WebcameraSettings {
    public audio:boolean|MediaTrackConstraints = false;
    public video = {} as any;

    constructor(width, height) {
        this.video.width = width;
        this.video.height = height;
    }   
}