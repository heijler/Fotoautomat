var ui;
(function (ui) {
    class UI {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.canvas = null;
            this.video = null;
            this.mirror = null;
            // static constraints:webcam.WebcameraSettings = null;
            this.warningElement = null;
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.video = document.getElementsByTagName("video")[0];
            this.mirror = document.getElementById("mirror");
            this.warningElement = document.getElementById("warning");
        }
    }
    ui.UI = UI;
})(ui || (ui = {}));
