namespace photobooth {
    /**
     * Photobooth
     * Represents the photobooth
     * @class Photobooth
     */
    declare var jsPDF:any;

    export class Photobooth {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        private constraints:webcam.WebcameraSettings = null;
        public  width:number  = 0;
        public  height:number = 0;
        private numPhotos:number = 0;
        private delay:number = 2000;
        private photos:number = 0;
        private img:HTMLImageElement;
        private pdf:any;
        private reflection:ui.Reflection;
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        
        public constructor(constraints:webcam.WebcameraSettings, numPhotos:number, delay:number) {
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
        private init():void {
            var cam = new webcam.Webcamera(this.constraints);
            var stream = cam.getStreamPromise();
            stream.then((stream:MediaStream) => {
                this.reflection = new ui.Reflection(stream);
                this.prepareCanvas();
            })
            .catch((err:Error) => {
                var warn = new alert.SystemWarning(err);
            })
        }

        /**
         * captureImages
         * Writes image data to canvas and fetches the image DataURI
         */
        public captureImages():void {
            this.clearImages();
            var counter = 0;
            var interval = setInterval(function() {
                this.captureFrame();
                counter++;
                if (counter == this.numPhotos) {
                    clearInterval(interval);
                    setTimeout(this.assignStripToElement.bind(this), 2000);
                }
            }.bind(this), this.delay);
        }

        /**
         * prepareCanvas
         * Set properties and call setCanvasSize
         */
        private prepareCanvas():void {
            this.width = this.reflection.width;
            this.height = this.reflection.height;
            this.setCanvasSize();
        }


        /**
         * clearImages
         * Call clearing methods
         */
        private clearImages():void {
            this.clearCanvases();
            this.clearImage();
            this.photos = 0;
        }

        /**
         * clearCanvases
         * Clears both the single photo canvas (tempcanvas) and the photostrip canvas (canvas)
         */
        private clearCanvases():void {
            Main.ui.tempCanvas.getContext("2d").clearRect(0, 0, Main.ui.tempCanvas.width, Main.ui.tempCanvas.height);
            Main.ui.canvas.getContext("2d").clearRect(0, 0, Main.ui.canvas.width, Main.ui.canvas.height);
            this.prepareCanvas();
        }

        /**
         * clearImage
         * Removes imagestrip element if it exists
         */
        private clearImage():void {
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
        private captureFrame():void {
            this.simulatePhotography();
            var context:CanvasRenderingContext2D = photobooth.Main.ui.tempCanvas.getContext('2d');
            var videoOffset:number = Math.abs(parseInt(Main.ui.video.style.marginLeft));
            context.drawImage(photobooth.Main.ui.video, videoOffset, 0, this.width, this.height, 0, 0, this.width, this.height);

            var imgData:ImageData = context.getImageData(0, 0, this.width, this.height);
            context.putImageData(this.toGrayScale(imgData), 0, 0);

            this.drawFrameOnCanvas();
        }

        /**
         * drawFrameOnCanvas
         * draws the image on a photostrip canvas, with calculated position
         */
        private drawFrameOnCanvas():void {
            var imgBase64:string = Main.ui.tempCanvas.toDataURL('image/jpg');
            var img:HTMLImageElement = new Image();
                img.src = imgBase64;
                img.addEventListener("load", function() {
                    console.log("img load")
                    Main.ui.canvas.getContext("2d").drawImage(img, 20, 20 + (this.photos * this.height) + (20 * this.photos));
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

        private toGrayScale(imgData:ImageData):ImageData {
            var data:Uint8ClampedArray = imgData.data;
            for (var i = 0; i < data.length; i+= 4) {
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
        private simulatePhotography():void {
            var audio = new Audio("assets/audio/camera-shutter.wav");
                audio.play();

            Main.ui.flash.classList.add("flashAnimation");
            Main.ui.flash.addEventListener("animationend", function() {
                Main.ui.flash.classList.remove("flashAnimation");
            });

        }

        /**
         * setCanvasSize
         * Sets the canvas sizes and fills the photostrip canvas with white
         */
        private setCanvasSize():void {
            // Set the tempcanvas size, where photo will be temporarily stored
            Main.ui.tempCanvas.height = this.height;
            Main.ui.tempCanvas.width  = this.width;

            // Set the photostrip canvas size
            
            Main.ui.canvas.height = (this.height * this.numPhotos) + ((this.numPhotos + 1) * 20);
            Main.ui.canvas.width = this.width + 40;
            
            var ctx = Main.ui.canvas.getContext("2d");
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
        private assignStripToElement():void {
            var photostripWrapper:Element = document.getElementsByClassName("photostripWrapper")[0]; // Make reference through main..
            var URI:string = Main.ui.canvas.toDataURL("image/jpg");
            this.img = new Image();
            this.img.src = URI;
            this.img.classList.add("photostrip");
            
            photostripWrapper.classList.add("slideDownStrip")
            photostripWrapper.appendChild(this.img);

            this.savePhotostripImage();

            var event:Event = new Event("photostrip-generated");
            Main.ui.export.dispatchEvent(event);
        }


        /**
         * savePhotostripImage
         * Creates a blob, and assigns it to the download button
         * @private
         */
        private savePhotostripImage():void {
            var downloadBtn:any = document.getElementById("exportOptions").children[0];
            downloadBtn.download = "Photostrip-" + this.getCurrentDateTime() + ".jpg";
            Main.ui.canvas.toBlob(function(blob) {
                downloadBtn.href = URL.createObjectURL(blob);
            }, "image/jpg");
        }

        /**
         * savePhotostripPDF
         * Saves a pdf of the photostrip, with a corrected scalefactor to work for
         * different image sizes
         */
        public savePhotostripPDF():void {
            this.pdf.internal.scaleFactor = Main.ui.canvas.height * 0.00274177456;
            this.pdf.addImage(this.img, "JPEG", 10, 10);
            this.pdf.save("Photostrip-" + this.getCurrentDateTime() + ".pdf");
        }

        /**
         * printPhotostripPDF
         * Attempts to print the photostrip
         */
        public printPhotostripPDF():void {
            this.pdf.internal.scaleFactor = Main.ui.canvas.height * 0.00274177456;
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
        private getCurrentDateTime():string {
            var date = new Date();
            return date.getFullYear() + "-" + this.twoCharZeroPad(date.getMonth().toString()) + "-" + this.twoCharZeroPad(date.getDate().toString()) + "_" + date.getHours().toString() + "." + date.getMinutes().toString();
        }

        /**
         * twoCharZeroPad
         * Returns a zero padded two char string
         * "6" -> "06"
         * @param string 
         */
        private twoCharZeroPad(string:string):string {
            return ("00"+string).substr(-2, 2);
        }
    }
}