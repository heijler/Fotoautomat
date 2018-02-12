/**
 * Warning
 * Represents a warning/error message and displaying of warn/err-bar.
 * @class Warning
 */
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
        this.displayWarning();
    }

    
    //----------------------------------------------------------------------
    // Dymanic Methods
    //----------------------------------------------------------------------

    /**
     * displayWarning
     * Displays the error/warning, adds eventlisteners
     * @return void
     * @memberof Warning
     */
    displayWarning():void {
        // Error/Warning name - message mapping
        var map = {
            One: "Thisis a warn",
            NotAllowedError: "You must allow your webcamera to be used!",
            NotReadableError: "Webcamera is not readable, please reload and try another camera!",
            AbortError: "null",
            NotFoundError: "null",
            OverconstrainedError: "null",
            SecurityError: "null",
            TypeError: "null",
            PermissionDismissedError: "You must allow your webcamera to be used!",
            PermissionDeniedError: "You must allow your webcamera to be used! Reload to try again."
        };

        // Display the error/warning
        Main.warningElement.style.display = "block";
        Main.warningElement.innerHTML = map[this.warning];
        Main.warningElement.addEventListener("click", this.eventHandler, false);
    }
    
    /**
     * hideWarning
     * Hides the warning bar
     * @return void
     * @memberof Warning
     */
    hideWarning():void {
        Main.warningElement.style.display = "none";
        Main.warningElement.innerHTML = "";
        Main.warningElement.removeEventListener("click", this.eventHandler, false);
    }
}