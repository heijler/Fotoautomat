/**
 * Main Class
 */

var Main = {

    canvas: null,
    video: null,
    videoFeed: null,

    init: function() {

        Main.canvas = document.getElementById("canvas");
        Main.video = document.getElementsByName("video");
        Main.videoFeed = new Webcamera("hello");
        
        console.log("Main.init");
    }
};
window.addEventListener("load", Main.init, false);