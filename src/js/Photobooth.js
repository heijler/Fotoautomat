/**
 * Represents the photobooth
 */
var Photobooth = /** @class */ (function () {
    function Photobooth() {
        this.videoElement = null;
        Main.canvas = document.getElementById("canvas");
        Main.video = document.getElementsByTagName("video")[0];
        Main.constraints = new WebcameraSettings(1280, 720);
        var cam = new Webcamera(Main.constraints);
        Main.videoFeed = cam.getStream();
        this.reflect(Main.videoFeed);
    }
    Photobooth.prototype.reflect = function (feed) {
        Main.video.srcObject = Main.videoFeed;
        Main.video.addEventListener("loadedmetadata", function (event) {
            Main.video.play();
        });
    };
    return Photobooth;
}());
