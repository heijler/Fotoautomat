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
        constructor() {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.videoElement = null;
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
            var cam = new webcam.Webcamera(photobooth.Main.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream) => {
                this.displayReflection(stream);
            })
                .catch((err) => {
                console.error(err.name, err.message);
            });
        }
        /**
         * displayReflection
         * Assigns the stream to the video-object and plays it back.
         * @param {MediaStream} stream
         * @memberof Photobooth
         */
        displayReflection(stream) {
            photobooth.Main.video.srcObject = stream;
            photobooth.Main.video.addEventListener("loadedmetadata", function (event) {
                photobooth.Main.video.play();
            });
        }
        /**
         * saveImage
         * Writes image data to canvas and fetches the image DataURI
         * @memberof Photobooth
         */
        saveImage() {
            var context = photobooth.Main.canvas.getContext('2d');
            var img = document.getElementsByTagName("img")[1];
            // s - source
            // d - destination
            // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            context.drawImage(photobooth.Main.video, 352, 0, 576, 720, 0, 0, 576, 720);
            img.src = photobooth.Main.canvas.toDataURL('image/png');
            console.log("image in img-element");
        }
    }
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
