namespace webcam {
    /**
     * WebcameraSettings
     * Represents a video media object setting.
     * Ex. { audio: false, video: { width: 1280, height: 720 } };
     * @class WebcameraSettings
     */
    export class WebcameraSettings {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        public audio:boolean|MediaTrackConstraints = false;
        public video = {} as any;
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
    
        /**
         * Get the width and height
         * @param width ideal webcamera stream width
         * @param height ideal webcamera stream height
         */
        constructor(width, height) {
            this.video.width = width;
            this.video.height = height;
        }   
    }
}