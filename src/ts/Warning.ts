/**
 * Represents a warning
 */

 //@TODO: Map common err.names with user friendly messages in a static Utils class.

class Warning {
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    private warning:string;
    private warningElement:HTMLElement;
    private eventHandler = this.hideWarning.bind(this); //To keep a a reference to the function/method in the correct scope.

    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------

    // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
    constructor(warning) {
        this.warning = warning;
        this.warningElement = Main.warningElement;
    }

    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------
    displayWarning():void {
        Main.warningElement.style.display = "block";
        Main.warningElement.innerHTML = this.warning;
        Main.warningElement.addEventListener("click", this.eventHandler, false);
    }

    hideWarning():void {
        Main.warningElement.style.display = "none";
        Main.warningElement.innerHTML = "";
        Main.warningElement.removeEventListener("click", this.eventHandler, false);
    }
}