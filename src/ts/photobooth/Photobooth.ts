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
    
        private constraints:webcam.WebcameraSettings = null;
        public  width:number  = 0;
        public  height:number = 0;
        private numPhotos = 0;
        private photos:Array<null> = new Array();
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        
        public constructor(constraints:webcam.WebcameraSettings, numPhotos:number) {
            this.constraints = constraints;
            this.numPhotos = numPhotos;
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
            var cam = new webcam.Webcamera(this.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream:MediaStream) => {
                var reflection = new ui.Reflection(stream);
                this.width = reflection.width;
                this.height = reflection.height;
                this.setCanvasSize();
            })
            .catch((err:Error) => {
                var warn = new alert.SystemWarning(err);
            })
        }

        /**
         * saveImage
         * Writes image data to canvas and fetches the image DataURI
         * @memberof Photobooth
         */
        public saveImage():void {
            var counter = 0;
            var interval = setInterval(function() {
                this.captureFrame();
                counter++;
                if (counter == this.numPhotos) {
                    clearInterval(interval);
                    setTimeout(this.getStrip, 2000);
                }
            }.bind(this), 5000);
        }

        private captureFrame():void {
            this.simulatePhotography();
            var context:CanvasRenderingContext2D = photobooth.Main.ui.tempCanvas.getContext('2d');
            var videoOffset:number = Math.abs(parseInt(Main.ui.video.style.marginLeft));
                context.drawImage(photobooth.Main.ui.video, videoOffset, 0, this.width, this.height, 0, 0, this.width, this.height);

            var temp = Main.ui.tempCanvas.toDataURL('image/png');
            var img = new Image();
                img.src = temp;
                img.addEventListener("load", function() {
                    Main.ui.canvas.getContext("2d").drawImage(img, 20, 20 + (this.photos.length * this.height) + (20 * this.photos.length));
                    this.photos.length++;
                }.bind(this));
        }

        private simulatePhotography():void {
            var audio = new Audio("assets/audio/camera-shutter.wav");
                audio.play();

            Main.ui.flash.classList.add("flashAnimation");
            Main.ui.flash.addEventListener("animationend", function() {
                Main.ui.flash.classList.remove("flashAnimation");
            });

        }

        private setCanvasSize():void {
            // Set the tempcanvas size, where photo will be temporarily stored
            Main.ui.tempCanvas.height = this.height;
            Main.ui.tempCanvas.width  = this.width;

            // Set the photostrip canvas size
            
            Main.ui.canvas.height = (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20);
            Main.ui.canvas.width = this.width + 40;
            
            var ctx = Main.ui.canvas.getContext("2d");
            ctx.fillStyle = "white";
            ctx.rect(0, 0, this.width + 40, (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20));
            ctx.fill();
        }

        private getStrip():void {
            var URI = Main.ui.canvas.toDataURL("image/png");
            var img = new Image();
            img.src = URI;
            document.body.appendChild(img); // This line only to see generated image.
        }
    }
}