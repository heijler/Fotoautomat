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
            this.ui.videoContainer.style.width = this.width + "px";
            this.ui.videoContainer.style.height = this.height + "px";
            this.ui.videoOverlay.style.width = this.width + "px";
            this.ui.videoOverlay.style.height = this.height + "px";
            this.ui.body.style.gridTemplateColumns = "1fr " + this.width + "px" + " 1fr";
            this.ui.video.style.height = "100vh";
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
                this.postSettings();
            }, false);
        }
        /*
         * postSettings
         * Settings to be applied after video is displayed;
         */
        postSettings() {
            var videoMid = this.ui.video.clientWidth / 2;
            var viewMid = parseInt(this.ui.videoContainer.style.width) / 2;
            this.ui.video.style.marginLeft = -(videoMid - viewMid) + "px";
        }
    }
    ui.Reflection = Reflection;
})(ui || (ui = {}));
