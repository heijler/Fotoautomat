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
            this.stream = null;
            this.ui = null;
            this.stream = stream;
            this.ui = photobooth.Main.ui;
            this.prepareVideo();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        prepareVideo() {
            var videoTrack = this.stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            this.ui.videoContainer.style.width = (document.documentElement.clientHeight / 5) * 4 + "px";
            this.ui.video.style.marginLeft = -(videoSettings.width - ((window.innerHeight / 5) * 4)) / 2 + "px";
            this.ui.videoOverlay.style.width = this.ui.videoContainer.style.width;
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
