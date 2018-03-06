namespace ui {
    export abstract class UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        protected canvas:HTMLCanvasElement = null;
        protected video:HTMLVideoElement = null;
        protected mirror:HTMLElement = null;
        // static constraints:webcam.WebcameraSettings = null;
        protected warningElement:HTMLElement = null;
        
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        protected constructor() {
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.video = document.getElementsByTagName("video")[0];
            this.mirror = document.getElementById("mirror");
            this.warningElement = document.getElementById("warning");
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    }
}