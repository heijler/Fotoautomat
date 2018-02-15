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
    
        constructor() {
            var cam = new webcam.Webcamera(photobooth.Main.constraints);
            var promise = cam.getPromise();
            var _this = this;
    
            promise.then(function(stream:MediaStream) {
                _this.displayReflection(stream);
            })
            .catch(function(err) {
                console.log(err.name, err.message)
            })
        }
    
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    
        /**
         * displayReflection
         * Assigns the stream to the video-object and plays it back.
         * @param {MediaStream} stream 
         * @memberof Photobooth
         */
        displayReflection(stream:MediaStream):void {
            console.log(stream);
    
            var temp = stream.getTracks();
            var temp2 = temp[0].getConstraints();
            // var temp3 = temp[0].getCapabilities();
            var temp4 = temp[0].getSettings();
            console.log("getContraints", temp2);
            // console.log("getCapabilities", temp3);
            console.log("getSettings", temp4);
    
    
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
        saveImage():void {
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