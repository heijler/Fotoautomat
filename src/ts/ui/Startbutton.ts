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
         * renderStartbutton
         * Starting point for the class
         */
        private renderStartbutton():void{
            this.createElements();
        }


        /**
         * createElements
         * Creates elements, adds attributes, and eventlisteners
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
         * onMouseDown
         * Mouse down handler
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
         * dispatchEvent
         * Dispatches an event when button is pressed.
         */
        private dispatchEvent():void {
            var event = new Event(Startbutton.BUTTON_PRESS);
            this.element.dispatchEvent(event);
        }
       
    }
}