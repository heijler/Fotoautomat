var ui;
(function (ui) {
    /**
     * Reflection
     * Represents the reflection/mirror
     * @class Reflection
     */
    class Reflection {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(stream) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.stream = null;
            this.width = null;
            this.height = null;
            this.ui = photobooth.Main.ui;
            this.stream = stream;
            this.prepareVideo();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        /**
         * prepareVideo
         * Prepares the video element to recieve the video
         */
        prepareVideo() {
            this.width = (document.documentElement.clientHeight / 5) * 4;
            this.height = document.documentElement.clientHeight;
            var videoTrack = this.stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            this.ui.videoContainer.style.width = this.width + "px";
            this.ui.videoOverlay.style.width = this.width + "px";
            this.ui.video.style.marginLeft = -(videoSettings.width - this.width) / 2 + "px";
            this.ui.body.style.gridTemplateColumns = "1fr " + this.width + "px" + " 1fr";
            this.renderReflection();
        }
        /**
         * renderReflection
         * Renders the reflection video stream by getting the stream to the video
         */
        renderReflection() {
            this.ui.video.srcObject = this.stream;
            this.ui.video.addEventListener("loadedmetadata", (event) => {
                this.ui.video.play();
            }, false);
        }
    }
    ui.Reflection = Reflection;
})(ui || (ui = {}));
