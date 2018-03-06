namespace webcam {
    /**
     * WebcameraSettings
     * Represents a video media object setting like:
     * {audio: false, video: {width: {ideal: 1280}, height: {ideal: 720}}};
     * @class WebcameraSettings
     */
    export class WebcameraSettings implements IWebcamSetting {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        public audio:boolean = false;
        public video:ISize = {} as any;
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
    
        /**
         * Get the width and height
         * @param width default: 3840, ideal webcamera stream width
         * @param height default: 2160, ideal webcamera stream height
         * @TODO: new jsdoc here
         */
        public constructor(width:IDimension = {ideal:3840}, height:IDimension = {ideal:2160}) {
            this.video.height = height;
            this.video.width = width;
            
            // this.video = width;
            // this.video.height = {ideal: height};
        }   
    }
}