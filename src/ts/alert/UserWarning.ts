namespace alert {
    /**
     * UserWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class Warning
     */
    export class UserWarning extends Warning {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        private warnMap = {
            NotAllowedError: "You must allow your webcamera to be used!",
            NotReadableError: "Webcamera is not readable, please reload and try another camera!",
            AbortError: "null",
            NotFoundError: "null",
            OverconstrainedError: "null",
            SecurityError: "null",
            TypeError: "null",
            PermissionDismissedError: "You must allow your webcamera to be used!",
            PermissionDeniedError: "You must allow your webcamera to be used! Reload to try again."
        }
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
    
        // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
        public constructor(warning:Error) {
            super(warning);
        }
    
        
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        
        private displayWarning():void {
            // @TODO: Move logic from Warning.ts to here
        }

        private hideWarning():void {
        // @TODO: Move logic from Warning.ts to here
        }
        
    }
}