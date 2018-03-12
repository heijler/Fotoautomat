namespace alert {
    /**
     * SystemWarning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class Warning
     */
    export class SystemWarning extends Warning {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
    
        // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
        public constructor(warning:Error) {
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
        private logWarning() {
            console.error(this.warning.name, this.warning.message);
        }
    }
}