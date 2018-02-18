var ui;
(function (ui) {
    /**
     * Reflection
     * Represents the reflection/mirror
     * @class Reflection
     */
    class Reflection extends ui.UI {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(stream) {
            super();
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.stream = null;
            this.stream = stream;
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        prepareVideo(stream) {
            var videoTrack = stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            // Use values from settings to prepare video element here, this method needs to run before the stream is delegated to the video object.
        }
        renderReflection(stream) {
            this.video.srcObject = stream;
            // Arrow function to keep the lexical scope.
            this.video.addEventListener("loadedmetadata", (event) => {
                this.video.play();
            }, false);
        }
    }
    ui.Reflection = Reflection;
})(ui || (ui = {}));
