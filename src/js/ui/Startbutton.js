var ui;
(function (ui) {
    /**
     * Startbutton
     * Represents the Startbutton
     * @class Startbutton
     */
    class Startbutton {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            this.ui = null;
            this.element = null;
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
        renderStartbutton() {
            this.createElements();
        }
        /**
         * createElements
         * Creates elements, adds attributes, and eventlisteners
         */
        createElements() {
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
        onMouseDown(event) {
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
        dispatchEvent() {
            var event = new Event(Startbutton.BUTTON_PRESS);
            this.element.dispatchEvent(event);
        }
    }
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------
    Startbutton.BUTTON_PRESS = "start-pressed";
    ui.Startbutton = Startbutton;
})(ui || (ui = {}));
