function init() {
    if (navigator.mediaDevices) {
        var constraints = {audio: false, video: { width: 1280, height: 720 }};
        navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
            var cam = document.getElementById("camera");
            cam.srcObject = mediaStream;
            cam.addEventListener("loadedmetadata", function(event) {
                cam.play();
            });
        })
        .catch(function(err) {
            console.log(err.name, err.message);
        });
    }
}
window.addEventListener("load", init, false);

// Prefer camera resolution closest to 1280x720.
// var constraints = { audio: true, video: { width: 720, height: 720 } }; 

// navigator.mediaDevices.getUserMedia(constraints)
// .then(function(mediaStream) {
//   var video = document.querySelector('video');
//   video.srcObject = mediaStream;
//   video.onloadedmetadata = function(event) {
//     video.play();
//   };
// })
// .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.