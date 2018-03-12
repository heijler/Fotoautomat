namespace alert {
    /**
     * UserWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class UserWarning
     */
    export class UserWarning extends Warning {

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
    
        // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
        public constructor(warning:Error) {
            super(warning);
            this.displayWarning();
        }
    }
}