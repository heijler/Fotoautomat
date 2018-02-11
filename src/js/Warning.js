/**
 * Represents a warning
 */
var Warning = /** @class */ (function () {
    //----------------------------------------------------------------------
    // Constructor
    //----------------------------------------------------------------------
    // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
    function Warning(warning) {
        this.warning = warning;
        this.warningElement = Main.warningElement;
    }
    //----------------------------------------------------------------------
    // Methods
    //----------------------------------------------------------------------
    Warning.prototype.displayWarning = function () {
        Main.warningElement.style.display = "block";
        Main.warningElement.textContent = this.warning;
    };
    Warning.prototype.hideWarning = function () {
        Main.warningElement.style.display = "none";
        Main.warningElement.textContent = "";
    };
    return Warning;
}());
