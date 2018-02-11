/**
 * Represents a warning
 */
//@TODO: Map common err.names with user friendly messages in a static Utils class.
var Warning = /** @class */ (function () {
    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------
    // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
    function Warning(warning) {
        this.eventHandler = this.hideWarning.bind(this);
        this.warning = warning;
        this.warningElement = Main.warningElement;
    }
    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------
    Warning.prototype.displayWarning = function () {
        console.log("displaywarning");
        Main.warningElement.style.display = "block";
        Main.warningElement.innerHTML = this.warning;
        Main.warningElement.addEventListener("click", this.eventHandler, false);
    };
    Warning.prototype.hideWarning = function () {
        Main.warningElement.style.display = "none";
        Main.warningElement.innerHTML = "";
        Main.warningElement.removeEventListener("click", this.eventHandler, false);
        console.log("hidewarning");
    };
    return Warning;
}());
