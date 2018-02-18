namespace photobooth {
    /**
     * Photobooth
     * Represents the photobooth
     * @class Photobooth
     */
    export class Photobooth {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        public videoElement = null;
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        
        public constructor() {
            this.init();
        }
    
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    
        /**
         * Init
         * Get the promise from webcamera and resolve to video
         * @memberof Photobooth
         */
        private init() {
            var cam = new webcam.Webcamera(photobooth.Main.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream:MediaStream) => {
                this.displayReflection(stream);
            })
            .catch((err:Error) => {
                var warn = new alert.SystemWarning(err);
            })
        }

        /**
         * displayReflection
         * Assigns the stream to the video-object and plays it back.
         * @param {MediaStream} stream 
         * @memberof Photobooth
         */
        private displayReflection(stream:MediaStream):void {
            photobooth.Main.video.srcObject = stream;
            photobooth.Main.video.addEventListener("loadedmetadata", function(event) {
                photobooth.Main.video.play();
            });
        }
    
        /**
         * saveImage
         * Writes image data to canvas and fetches the image DataURI
         * @memberof Photobooth
         */
        public saveImage():void {
            var context:CanvasRenderingContext2D = photobooth.Main.canvas.getContext('2d');
            var img:HTMLImageElement = document.getElementsByTagName("img")[1];
            // s - source
            // d - destination
            // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            context.drawImage(photobooth.Main.video, 352, 0, 576, 720, 0, 0, 576, 720);
            img.src = photobooth.Main.canvas.toDataURL('image/png');
            console.log("image in img-element");
        }
    }
}