/**
 * Represents a warning
 */
class Warning {
    //----------------------------------------------------------------------
    // Properties
    //----------------------------------------------------------------------

    private warning:string;
    private warningElement:HTMLElement;

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
    displayWarning() {
        Main.warningElement.style.display = "block";
        Main.warningElement.textContent = this.warning;
    }

    hideWarning() {
        Main.warningElement.style.display = "none";
        Main.warningElement.textContent = "";
    }
}