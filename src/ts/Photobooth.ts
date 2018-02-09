/** 
 * Represents the photobooth
 */
class Photobooth {
    public videoElement = null;
    constructor() {
        Main.canvas = document.getElementById("canvas");
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 720);
        var cam = new Webcamera(Main.constraints);
        Main.videoFeed = cam.getStream();
        console.log(Main.videoFeed);
        console.log(typeof Main.videoFeed);
        this.reflect(Main.videoFeed);
    }

    reflect(feed:Promise <void | MediaStream>) {
        Main.video.srcObject = Main.videoFeed;
        Main.video.addEventListener("loadedmetadata", function(event){
            Main.video.play();
        });
    }
}