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
        public constructor(stream:MediaStream) {
            super();
            this.stream = stream;
            this.prepareVideo();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private prepareVideo():void {
            var videoTrack = this.stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            // Use values from settings to prepare video element here, this method needs to run before the stream is delegated to the video object.
            // console.log("videoSettings.height, videoSettings.width", videoSettings.height, videoSettings.width);
            // console.log("window.innerHeight", window.innerHeight);
            // console.log("(window.innerHeight/5)*4", (window.innerHeight/5) * 4);
            // console.log((videoSettings.width - ((window.innerHeight / 5) * 4)) / 2);
            this.mirror.style.width = (document.documentElement.clientHeight/5) * 4 + "px";
            this.video.style.marginLeft = -(videoSettings.width - ((window.innerHeight / 5) * 4)) / 2 + "px";
            this.renderReflection();
        }
        
        private renderReflection():void {
            this.video.srcObject = this.stream;
            // Arrow function to keep the lexical scope.
            this.video.addEventListener("loadedmetadata", (event) => {
                this.video.play();
            }, false);
        }
    }
}