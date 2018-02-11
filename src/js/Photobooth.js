/**
 * Represents the photobooth
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
    Photobooth.prototype.displayReflection = function (stream) {
        Main.video.srcObject = stream;
        Main.video.addEventListener("loadedmetadata", function (event) {
            Main.video.play();
        });
    };
    return Photobooth;
}());
