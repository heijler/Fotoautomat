var photobooth;
(function (photobooth) {
    /**
     * Photobooth
     * Represents the photobooth
     * @class Photobooth
     */
    class Photobooth {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(constraints, numPhotos) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.constraints = null;
            this.width = 0;
            this.height = 0;
            this.numPhotos = 0;
            this.photos = new Array();
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
        init() {
            var cam = new webcam.Webcamera(this.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream) => {
                var reflection = new ui.Reflection(stream);
                this.width = reflection.width;
                this.height = reflection.height;
                this.setCanvasSize();
            })
                .catch((err) => {
                var warn = new alert.SystemWarning(err);
            });
        }
        /**
         * saveImage
         * Writes image data to canvas and fetches the image DataURI
         * @memberof Photobooth
         */
        saveImage() {
            var counter = 0;
            var interval = setInterval(function () {
                this.captureFrame();
                counter++;
                if (counter == this.numPhotos) {
                    clearInterval(interval);
                    setTimeout(this.getStrip, 2000);
                }
            }.bind(this), 5000);
        }
        captureFrame() {
            this.simulatePhotography();
            var context = photobooth.Main.ui.tempCanvas.getContext('2d');
            var videoOffset = Math.abs(parseInt(photobooth.Main.ui.video.style.marginLeft));
            context.drawImage(photobooth.Main.ui.video, videoOffset, 0, this.width, this.height, 0, 0, this.width, this.height);
            var temp = photobooth.Main.ui.tempCanvas.toDataURL('image/png');
            var img = new Image();
            img.src = temp;
            img.addEventListener("load", function () {
                photobooth.Main.ui.canvas.getContext("2d").drawImage(img, 20, 20 + (this.photos.length * this.height) + (20 * this.photos.length));
                this.photos.length++;
            }.bind(this));
        }
        simulatePhotography() {
            var audio = new Audio("assets/audio/camera-shutter.wav");
            audio.play();
            photobooth.Main.ui.flash.classList.add("flashAnimation");
            photobooth.Main.ui.flash.addEventListener("animationend", function () {
                photobooth.Main.ui.flash.classList.remove("flashAnimation");
            });
        }
        setCanvasSize() {
            // Set the tempcanvas size, where photo will be temporarily stored
            photobooth.Main.ui.tempCanvas.height = this.height;
            photobooth.Main.ui.tempCanvas.width = this.width;
            // Set the photostrip canvas size
            photobooth.Main.ui.canvas.height = (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20);
            photobooth.Main.ui.canvas.width = this.width + 40;
            var ctx = photobooth.Main.ui.canvas.getContext("2d");
            ctx.fillStyle = "white";
            ctx.rect(0, 0, this.width + 40, (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20));
            ctx.fill();
        }
        getStrip() {
            var URI = photobooth.Main.ui.canvas.toDataURL("image/png");
            var img = new Image();
            img.src = URI;
            document.body.appendChild(img); // This line only to see generated image.
        }
    }
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
