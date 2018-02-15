var photobooth;
(function (photobooth) {
    /**
     * Photobooth
     * Represents the photobooth
     * @class Photobooth
     */
    var Photobooth = /** @class */ (function () {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        function Photobooth() {
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
        Photobooth.prototype.init = function () {
            var cam = new webcam.Webcamera(photobooth.Main.constraints);
            var promise = cam.getPromise();
            promise.then(function (stream) {
                this.displayReflection(stream);
            }.bind(this)) //To keep the object/this reference
                .catch(function (err) {
                console.error(err.name, err.message);
            });
        };
        /**
         * displayReflection
         * Assigns the stream to the video-object and plays it back.
         * @param {MediaStream} stream
         * @memberof Photobooth
         */
        Photobooth.prototype.displayReflection = function (stream) {
            var temp = stream.getTracks();
            var temp2 = temp[0].getConstraints();
            // var temp3 = temp[0].getCapabilities();
            var temp4 = temp[0].getSettings();
            console.log("getContraints", temp2);
            // console.log("getCapabilities", temp3);
            console.log("getSettings", temp4);
            photobooth.Main.video.srcObject = stream;
            photobooth.Main.video.addEventListener("loadedmetadata", function (event) {
                photobooth.Main.video.play();
            });
        };
        /**
         * saveImage
         * Writes image data to canvas and fetches the image DataURI
         * @memberof Photobooth
         */
        Photobooth.prototype.saveImage = function () {
            var context = photobooth.Main.canvas.getContext('2d');
            var img = document.getElementsByTagName("img")[1];
            // s - source
            // d - destination
            // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
            context.drawImage(photobooth.Main.video, 352, 0, 576, 720, 0, 0, 576, 720);
            img.src = photobooth.Main.canvas.toDataURL('image/png');
            console.log("image in img-element");
        };
        return Photobooth;
    }());
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
