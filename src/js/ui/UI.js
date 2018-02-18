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
            // static constraints:webcam.WebcameraSettings = null;
            this.warningElement = null;
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.video = document.getElementsByTagName("video")[0];
            this.warningElement = document.getElementById("warning");
        }
    }
    ui.UI = UI;
})(ui || (ui = {}));
