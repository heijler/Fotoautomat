namespace ui {
    export abstract class UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        protected canvas:HTMLCanvasElement = null;
        protected video:HTMLVideoElement = null;
        // static constraints:webcam.WebcameraSettings = null;
        protected warningElement:HTMLElement = null;
        
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.video = document.getElementsByTagName("video")[0];
            this.warningElement = document.getElementById("warning");
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    }
}