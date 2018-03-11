namespace photobooth {
    /**
     * Main
     * @class Main
     */
    
    export class Main {
    
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        public static ui:ui.PhotoboothUI = null;
        public static numPhotos:number = 4;
    
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    
        /**
         * init
         * Assigns DOM-element references to properties and instantiates the photobooth
         * @static
         * @memberof Main
         */
        public static init():void {
            Main.ui = new ui.PhotoboothUI();
            Main.ui.init();

            var constraints:webcam.WebcameraSettings = new webcam.WebcameraSettings();
            var pb:photobooth.Photobooth = new photobooth.Photobooth(constraints, Main.numPhotos);

            Main.ui.coinSlot.addEventListener("coin-insert", function(event:Event) {
                Main.ui.start.children[0].className = "startButton-active";
            });

            Main.ui.start.children[0].addEventListener("start-pressed", function(event:Event) {
                pb.captureImages();
            });

            Main.ui.export.addEventListener("photostrip-generated", function(event:Event) {
                console.log("photostrip generated");
            });

            Main.ui.export.addEventListener("save-pdf", function(){
                console.log("main, save pdf");
                pb.savePhotostripPDF();
            });

            Main.ui.export.addEventListener("print-pdf", function(){
                console.log("main, print pdf");
                pb.printPhotostripPDF();
            });
        }
    }

}
window.addEventListener("load", photobooth.Main.init, false);