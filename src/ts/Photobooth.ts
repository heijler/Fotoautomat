/** 
 * Represents the photobooth
 */
var Photobooth = function() {
    this.videoElement = null;
    Main.canvas = document.getElementById("canvas");
    Main.video = document.getElementsByTagName("video")[0];
    
    Main.constraints = {audio: false, video: { width: 1280, height: 720 }};
    Main.videoFeed = new Webcamera(Main.constraints);
    
    console.log(Main.videoFeed);
    // Main.video.srcObject = Main.videoFeed;
    // Main.video.addEventListener("loadedmetadata", function(event) {
    //     Main.video.play();
    // });
}