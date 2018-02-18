var alert;
(function (alert) {
    /**
     * SystemWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class Warning
     */
    class SystemWarning extends alert.Warning {
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
    alert.SystemWarning = SystemWarning;
})(alert || (alert = {}));
