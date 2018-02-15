var ui;
(function (ui) {
    var UI = /** @class */ (function () {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        function UI() {
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
        return UI;
    }());
    ui.UI = UI;
})(ui || (ui = {}));
