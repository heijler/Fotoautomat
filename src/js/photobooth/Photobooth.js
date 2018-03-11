var photobooth;
(function (photobooth) {
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
                    setTimeout(this.assignStripToElement, 2000);
                }
            }.bind(this), 5000);
        }
        /**
         * captureFrame
         *
         */
        captureFrame() {
            this.simulatePhotography();
            var context = photobooth.Main.ui.tempCanvas.getContext('2d');
            var videoOffset = Math.abs(parseInt(photobooth.Main.ui.video.style.marginLeft));
            context.drawImage(photobooth.Main.ui.video, videoOffset, 0, this.width, this.height, 0, 0, this.width, this.height);
            var imgData = context.getImageData(0, 0, this.width, this.height);
            context.putImageData(this.toGrayScale(imgData), 0, 0);
            this.drawFrameOnCanvas();
        }
        /**
         * drawFrameOnCanvas
         *
         */
        drawFrameOnCanvas() {
            var imgBase64 = photobooth.Main.ui.tempCanvas.toDataURL('image/jpg');
            var img = new Image();
            img.src = imgBase64;
            img.addEventListener("load", function () {
                photobooth.Main.ui.canvas.getContext("2d").drawImage(img, 20, 20 + (this.photos.length * this.height) + (20 * this.photos.length));
                this.photos.length++;
            }.bind(this));
        }
        /**
         * toGrayScale
         * Loops over ImageData data (RGBA pixel values) and converts to grayscale
         * using the Rec. 709 luma coefficients.
         * R = data[i]
         * G = data[i + 1]
         * B = data[i + 2]
         * A = data[i + 3]
         * @param imgData
         */
        toGrayScale(imgData) {
            var data = imgData.data;
            for (var i = 0; i < data.length; i += 4) {
                // Rec. 709 Luma coefficients
                var luma = (data[i] * 0.2126) + (data[i + 1] * 0.7152) + (data[i + 2] * 0.0722);
                data[i] = luma;
                data[i + 1] = luma;
                data[i + 2] = luma;
            }
            return imgData;
        }
        /**
         * simulatePhotography
         *
         */
        simulatePhotography() {
            var audio = new Audio("assets/audio/camera-shutter.wav");
            audio.play();
            photobooth.Main.ui.flash.classList.add("flashAnimation");
            photobooth.Main.ui.flash.addEventListener("animationend", function () {
                photobooth.Main.ui.flash.classList.remove("flashAnimation");
            });
        }
        /**
         * setCanvasSize
         *
         */
        setCanvasSize() {
            // Set the tempcanvas size, where photo will be temporarily stored
            photobooth.Main.ui.tempCanvas.height = this.height;
            photobooth.Main.ui.tempCanvas.width = this.width;
            // Set the photostrip canvas size
            photobooth.Main.ui.canvas.height = (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20);
            photobooth.Main.ui.canvas.width = this.width + 40;
            var ctx = photobooth.Main.ui.canvas.getContext("2d");
            // Fill canvas with white.
            ctx.fillStyle = "#ffffff";
            ctx.rect(0, 0, this.width + 40, (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20));
            ctx.fill();
        }
        /**
         * assignStripToElement
         *
         */
        assignStripToElement() {
            var photostripWrapper = document.getElementsByClassName("photostripWrapper")[0]; // Make reference through main..
            var URI = photobooth.Main.ui.canvas.toDataURL("image/jpg");
            var img = new Image();
            img.src = URI;
            img.classList.add("photostrip");
            photostripWrapper.classList.add("slideDownStrip");
            photostripWrapper.appendChild(img);
            var event = new Event("photostrip-generated");
            photobooth.Main.ui.body.dispatchEvent(event);
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.width;
            var height = pdf.internal.pageSize.height;
            // pdf.internal.scaleFactor = Main.ui.canvas.height * 0.00274177456;
            // pdf.addImage(img, "JPEG", 10, 10);
            // pdf.autoPrint();
            // pdf.save();
            // window.open(pdf.output('bloburl'), '_blank');
            // pdf.save("download.pdf");
        }
    }
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
