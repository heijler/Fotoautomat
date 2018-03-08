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
            this.ui = photobooth.Main.ui;
            this.stream = stream;
            this.prepareVideo();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        prepareVideo() {
            var videoTrack = this.stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            this.ui.videoContainer.style.width = (document.documentElement.clientHeight / 5) * 4 + "px";
            this.ui.video.style.marginLeft = -(videoSettings.width - ((document.documentElement.clientHeight / 5) * 4)) / 2 + "px";
            this.ui.videoOverlay.style.width = this.ui.videoContainer.style.width;
            this.ui.body.style.gridTemplateColumns = "1fr " + this.ui.videoContainer.style.width + " 1fr";
            this.renderReflection();
        }
        renderReflection() {
            this.ui.video.srcObject = this.stream;
            this.ui.video.addEventListener("loadedmetadata", (event) => {
                this.ui.video.play();
            }, false);
        }
    }
    ui.Reflection = Reflection;
})(ui || (ui = {}));
