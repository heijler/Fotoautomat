namespace ui {
    /** 
     * Startbutton
     * Represents the Startbutton
     * @class Startbutton
     */
    export class Startbutton {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        public static BUTTON_PRESS:string = "start-pressed";
        private ui:PhotoboothUI = null;
        public element:HTMLElement = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor() {
            this.ui = photobooth.Main.ui;
            this.renderStartbutton();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        /**
         * 
         */
        private renderStartbutton():void{
            this.createElements();
        }


        /**
         * 
         */
        private createElements():void {
            var startButton = document.createElement("div");
                startButton.id = "startButton";
                startButton.textContent = "Start";
                startButton.classList.add("startButton-inactive");

                startButton.addEventListener("mousedown", this.onMouseDown.bind(this), false);
            this.element = startButton;
        }


        /**
         * 
         * @param event 
         */
        private onMouseDown(event:MouseEvent):void {
            if (this.element.classList.contains("startButton-active")) {

                var audio = new Audio("assets/audio/button-push.wav");
                    audio.play();

                this.dispatchEvent();

            }
        }


        /**
         * 
         */
        private dispatchEvent():void {
            var event = new Event(Startbutton.BUTTON_PRESS);
            this.element.dispatchEvent(event);
        }
       
    }
}