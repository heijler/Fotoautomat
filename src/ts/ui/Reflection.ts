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
        private stream:MediaStream = null;
        private ui:PhotoboothUI = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor(stream:MediaStream) {
            this.stream = stream;
            this.ui = photobooth.Main.ui;
            this.prepareVideo();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private prepareVideo():void {
            var videoTrack = this.stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            this.ui.videoContainer.style.width = (document.documentElement.clientHeight / 5) * 4 + "px";
            this.ui.video.style.marginLeft = -(videoSettings.width - ((window.innerHeight / 5) * 4)) / 2 + "px";
            this.ui.videoOverlay.style.width = this.ui.videoContainer.style.width;
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