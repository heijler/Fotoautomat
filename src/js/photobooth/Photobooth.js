var photobooth;
(function (photobooth) {
    class Photobooth {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(constraints, numPhotos, delay) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.constraints = null;
            this.width = 0;
            this.height = 0;
            this.numPhotos = 0;
            this.delay = 2000;
            this.photos = 0;
            this.constraints = constraints;
            this.numPhotos = numPhotos;
            this.delay = delay;
            this.pdf = new jsPDF();
            this.init();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        /**
         * Init
         * Get the promise from webcamera and resolve to video
         */
        init() {
            var cam = new webcam.Webcamera(this.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream) => {
                this.reflection = new ui.Reflection(stream);
                this.prepareCanvas();
            })
                .catch((err) => {
                var warn = new alert.SystemWarning(err);
            });
        }
        /**
         * captureImages
         * Writes image data to canvas and fetches the image DataURI
         */
        captureImages() {
            this.clearImages();
            var counter = 0;
            var interval = setInterval(function () {
                this.captureFrame();
                counter++;
                if (counter == this.numPhotos) {
                    clearInterval(interval);
                    setTimeout(this.assignStripToElement.bind(this), 2000); // Not optimal, should not depend on timeout..
                }
            }.bind(this), this.delay);
        }
        /**
         * prepareCanvas
         * Set properties and call setCanvasSize
         */
        prepareCanvas() {
            this.width = this.reflection.width;
            this.height = this.reflection.height;
            this.setCanvasSize();
        }
        /**
         * clearImages
         * Call clearing methods
         */
        clearImages() {
            this.clearCanvases();
            this.clearImage();
            this.photos = 0;
        }
        /**
         * clearCanvases
         * Clears both the single photo canvas (tempcanvas) and the photostrip canvas (canvas)
         */
        clearCanvases() {
            photobooth.Main.ui.tempCanvas.getContext("2d").clearRect(0, 0, photobooth.Main.ui.tempCanvas.width, photobooth.Main.ui.tempCanvas.height);
            photobooth.Main.ui.canvas.getContext("2d").clearRect(0, 0, photobooth.Main.ui.canvas.width, photobooth.Main.ui.canvas.height);
            this.prepareCanvas();
        }
        /**
         * clearImage
         * Removes imagestrip element if it exists
         */
        clearImage() {
            if (this.img) {
                console.log("image exists");
                this.img.parentElement.classList.remove("slideDownStrip");
                this.img.parentElement.removeChild(this.img);
                this.img.src = "";
            }
        }
        /**
         * captureFrame
         * Captures a frame and draws it on a temporary canvas.
         * Makes the image grayscale
         */
        captureFrame() {
            this.simulatePhotography();
            var context = photobooth.Main.ui.tempCanvas.getContext('2d');
            var fullWidth = photobooth.Main.ui.video.videoWidth;
            var cropWidth = (photobooth.Main.ui.video.videoHeight / 5) * 4;
            var videoOffset = fullWidth / 2 - cropWidth / 2;
            context.drawImage(photobooth.Main.ui.video, videoOffset, 0, (photobooth.Main.ui.video.videoHeight / 5) * 4, photobooth.Main.ui.video.videoHeight, 0, 0, this.width, this.height);
            var imgData = context.getImageData(0, 0, this.width, this.height);
            context.putImageData(this.toGrayScale(imgData), 0, 0);
            this.drawFrameOnCanvas();
        }
        /**
         * drawFrameOnCanvas
         * draws the image on a photostrip canvas, with calculated position
         */
        drawFrameOnCanvas() {
            var imgBase64 = photobooth.Main.ui.tempCanvas.toDataURL('image/jpg');
            var img = new Image();
            img.src = imgBase64;
            img.addEventListener("load", function () {
                console.log("img load");
                photobooth.Main.ui.canvas.getContext("2d").drawImage(img, 20, 20 + (this.photos * this.height) + (20 * this.photos));
                this.photos++;
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
         * Simulates photography, with shutter sound and flashing screen.
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
         * Sets the canvas sizes and fills the photostrip canvas with white
         */
        setCanvasSize() {
            // Set the tempcanvas size, where photo will be temporarily stored
            photobooth.Main.ui.tempCanvas.height = this.height;
            photobooth.Main.ui.tempCanvas.width = this.width;
            // Set the photostrip canvas size
            photobooth.Main.ui.canvas.height = (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20);
            photobooth.Main.ui.canvas.width = this.width + 40;
            var ctx = photobooth.Main.ui.canvas.getContext("2d");
            // Fill canvas.
            ctx.fillStyle = "#000000";
            ctx.rect(0, 0, this.width + 40, (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20));
            ctx.fill();
        }
        /**
         * assignStripToElement
         * Assigns the photostrip to an img element to display it
         *
         */
        assignStripToElement() {
            var photostripWrapper = document.getElementsByClassName("photostripWrapper")[0]; // Make reference through main..
            var URI = photobooth.Main.ui.canvas.toDataURL("image/jpg");
            this.img = new Image();
            this.img.src = URI;
            this.img.classList.add("photostrip");
            photostripWrapper.classList.add("slideDownStrip");
            photostripWrapper.appendChild(this.img);
            this.savePhotostripImage();
            var event = new Event("photostrip-generated");
            photobooth.Main.ui.export.dispatchEvent(event);
        }
        /**
         * savePhotostripImage
         * Creates a blob, and assigns it to the download button
         * @private
         */
        savePhotostripImage() {
            var downloadBtn = document.getElementById("exportOptions").children[0];
            downloadBtn.download = "Photostrip-" + this.getCurrentDateTime() + ".jpg";
            photobooth.Main.ui.canvas.toBlob(function (blob) {
                downloadBtn.href = URL.createObjectURL(blob);
            }, "image/jpg");
        }
        /**
         * savePhotostripPDF
         * Saves a pdf of the photostrip, with a corrected scalefactor to work for
         * different image sizes
         */
        savePhotostripPDF() {
            this.pdf.internal.scaleFactor = photobooth.Main.ui.canvas.height * 0.00274177456;
            this.pdf.addImage(this.img, "JPEG", 10, 10);
            this.pdf.save("Photostrip-" + this.getCurrentDateTime() + ".pdf");
        }
        /**
         * printPhotostripPDF
         * Attempts to print the photostrip
         */
        printPhotostripPDF() {
            this.pdf.internal.scaleFactor = photobooth.Main.ui.canvas.height * 0.00274177456;
            this.pdf.addImage(this.img, "JPEG", 10, 10);
            this.pdf.autoPrint();
            window.open(this.pdf.output("bloburl"), "_blank");
        }
        /**
         * getCurrentDateTime
         * Returns a string in format: YYYY-MM-DD_HH.mm
         * @private
         * @returns {string}
         */
        getCurrentDateTime() {
            var date = new Date();
            return date.getFullYear() + "-" + this.twoCharZeroPad(date.getMonth().toString()) + "-" + this.twoCharZeroPad(date.getDate().toString()) + "_" + date.getHours().toString() + "." + date.getMinutes().toString();
        }
        /**
         * twoCharZeroPad
         * Returns a zero padded two char string
         * "6" -> "06"
         * @param string
         */
        twoCharZeroPad(string) {
            return ("00" + string).substr(-2, 2);
        }
    }
    photobooth.Photobooth = Photobooth;
})(photobooth || (photobooth = {}));
