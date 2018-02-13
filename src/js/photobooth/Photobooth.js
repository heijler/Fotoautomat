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
        var cam = new Webcamera(Main.constraints);
        var promise = cam.getPromise();
        var _this = this;
        promise.then(function (stream) {
            _this.displayReflection(stream);
        })
            .catch(function (err) {
            console.log(err.name, err.message);
        });
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
    Photobooth.prototype.displayReflection = function (stream) {
        Main.video.srcObject = stream;
        Main.video.addEventListener("loadedmetadata", function (event) {
            Main.video.play();
        });
    };
    Photobooth.prototype.saveImage = function () {
        var context = Main.canvas.getContext('2d');
        var img = document.getElementsByTagName("img")[1];
        context.drawImage(Main.video, 0, 0, 576, 720, 0, 0, 576, 720);
        img.src = Main.canvas.toDataURL('image/png');
        console.log("image in img-element");
    };
    return Photobooth;
}());
