namespace webcam {
    /**
     * WebcameraSettings
     * Represents a video media object setting like:
     * {audio: false, video: {width: {ideal: 1280}, height: {ideal: 720}}};
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
         * @param width default: 3840, ideal webcamera stream width
         * @param height default: 2160, ideal webcamera stream height
         */
        constructor(width = 3840, height = 2160) { // @FIX: typa
            this.video.width = {ideal: width} as any;
            this.video.height = {ideal: height} as any;
        }   
    }
}