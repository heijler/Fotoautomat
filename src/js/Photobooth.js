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
        // Main.videoFeed = cam.getPromise();
        // console.log("Photobooth constructor", promise);
        promise.then(function (stream) {
            console.log("In .then()", stream);
            // console.log(this);
            _this.displayReflection(stream);
        })
            .catch(function (err) {
            console.log(err.name, err.message);
        });
        //this.reflect(promise); // Temporary
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
