namespace ui {
    /** 
     * Reflection
     * Represents the reflection/mirror
     * @class Reflection
     */
    export class Reflection extends UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private stream:MediaStream = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(stream:MediaStream) {
            super();
            this.stream = stream;
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        prepareVideo(stream:MediaStream):void {
            var videoTrack = stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            // Use values from settings to prepare video element here, this method needs to run before the stream is delegated to the video object.
        }
        
        renderReflection(stream:MediaStream):void {
            this.video.srcObject = stream;
            this.video.addEventListener("loadedmetadata", function(event) {
                this.video.play();
            }.bind(this), false);
        }
    }
}