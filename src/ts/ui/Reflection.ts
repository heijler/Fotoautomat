namespace ui {
    /** 
     * Reflection
     * Represents the reflection/mirror
     * @class Reflection
     */
    export class Reflection {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private ui:PhotoboothUI = null;
        private stream:MediaStream = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor(stream:MediaStream) {
            this.ui = photobooth.Main.ui;
            this.stream = stream;
            this.prepareVideo();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private prepareVideo():void {
            var videoTrack = this.stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            this.ui.videoContainer.style.width = (document.documentElement.clientHeight / 5) * 4 + "px";
            this.ui.video.style.marginLeft = -(videoSettings.width - ((document.documentElement.clientHeight / 5) * 4)) / 2 +  "px";
            this.ui.videoOverlay.style.width = this.ui.videoContainer.style.width;
            this.ui.body.style.gridTemplateColumns = "1fr " + this.ui.videoContainer.style.width + " 1fr";
            this.renderReflection();
        }
        
        private renderReflection():void {
            this.ui.video.srcObject = this.stream;
            this.ui.video.addEventListener("loadedmetadata", (event) => {
                this.ui.video.play();
            }, false);
        }
    }
}