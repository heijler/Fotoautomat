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
        Main.canvas = document.getElementsByTagName("canvas")[0];
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 720);
        var cam = new Webcamera(Main.constraints);
        Main.videoFeed = cam.getStream();
        console.log(Main.videoFeed);
        console.log(typeof Main.videoFeed);
        this.reflect(Main.videoFeed);
    }

    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------

    reflect(feed:Promise <MediaStream>) {
        var mediaStream:MediaStream;
        feed.then(function(stream){
            mediaStream = stream;
        })
        .catch(function(err) {
            console.log(err.name, err.message);
        });

        Main.video.srcObject = mediaStream;
        Main.video.addEventListener("loadedmetadata", function(event){
            Main.video.play();
        });
    }
}