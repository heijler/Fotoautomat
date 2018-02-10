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

        // Main.videoFeed = cam.getPromise();

        console.log("Photobooth constructor", promise);

        promise.then(function(stream) {
            console.log("In .then()", stream);
        })
        .catch(function(err) {
            console.log(err.name, err.message)
        })
        //this.reflect(promise); // Temporary
    }

    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------

    // reflect(feed:Promise <void | MediaStream>) {
    //     var mediaStream:MediaStream;
    //     feed.then(function(stream){
    //         mediaStream = stream;
    //     })
    //     .catch(function(err) {
    //         console.log(err.name, err.message);
    //     });

    //     // Main.video.srcObject = mediaStream;
    //     // Main.video.addEventListener("loadedmetadata", function(event){
    //     //     Main.video.play();
    //     // });
    // }
}