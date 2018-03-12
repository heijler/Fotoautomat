var alert;
(function (alert) {
    /**
     * SystemWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class UserWarning
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
            // this.displayWarning();
            this.logWarning();
        }
        //----------------------------------------------------------------------
        // Dymanic Methods
        //----------------------------------------------------------------------
        /**
         *
         */
        logWarning() {
            console.error(this.warning.name, this.warning.message);
        }
    }
    alert.SystemWarning = SystemWarning;
})(alert || (alert = {}));
