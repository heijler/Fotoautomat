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
        // Main.videoFeed = cam.getPromise();
        console.log("Photobooth constructor", promise);
        promise.then(function (stream) {
            console.log("In .then()", stream);
        })
            .catch(function (err) {
            console.log(err.name, err.message);
        });
        //this.reflect(promise); // Temporary
    }
    return Photobooth;
}());
