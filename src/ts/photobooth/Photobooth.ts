/**
 * Photobooth
 * Represents the photobooth
 * @class Photobooth
 */
class Photobooth {

    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    public videoElement = null;

    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------

    constructor() {
        var cam = new Webcamera(Main.constraints);
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
        Main.video.srcObject = stream;
        Main.video.addEventListener("loadedmetadata", function(event) {
            Main.video.play();
        });
    }

    saveImage():void {
        var context:CanvasRenderingContext2D = Main.canvas.getContext('2d');
        var img:HTMLImageElement = document.getElementsByTagName("img")[1];
        context.drawImage(Main.video, 0, 0, 576, 720, 0, 0, 576, 720);
        img.src = Main.canvas.toDataURL('image/png');
        console.log("image in img-element");
    }
}