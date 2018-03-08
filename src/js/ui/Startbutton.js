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
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.element = null;
            this.ui = photobooth.Main.ui;
            this.renderStartbutton();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        renderStartbutton() {
            this.createElements();
        }
        createElements() {
            var startButton = document.createElement("div");
            startButton.id = "startButton";
            startButton.textContent = "Start";
            startButton.classList.add("startButton-inactive");
            this.element = startButton;
        }
    }
    ui.Startbutton = Startbutton;
})(ui || (ui = {}));
