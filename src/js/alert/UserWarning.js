var alert;
(function (alert) {
    /**
     * UserWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class Warning
     */
    class UserWarning extends alert.Warning {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
        constructor(warning) {
            super(warning);
        }
    }
    alert.UserWarning = UserWarning;
})(alert || (alert = {}));
