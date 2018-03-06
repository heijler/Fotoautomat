var alert;
(function (alert) {
    /**
     * UserWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class Warning
     */
    class UserWarning extends alert.Warning {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
        constructor(warning) {
            super(warning);
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.warnMap = {
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
        }
    }
    alert.UserWarning = UserWarning;
})(alert || (alert = {}));
