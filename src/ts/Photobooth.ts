/** 
 * Represents the photobooth
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

    displayReflection(stream:MediaStream) {
        Main.video.srcObject = stream;
        Main.video.addEventListener("loadedmetadata", function(event) {
            Main.video.play();
        });
    }
}