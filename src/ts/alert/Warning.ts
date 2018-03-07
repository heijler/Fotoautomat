namespace alert {
    /**
     * Warning
     * Represents a warning/error message and displaying of warn/err-bar.
     * @class Warning
     */
    export abstract class Warning {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
    
        protected warning:Error;
        private warningElement:HTMLElement;
        private eventHandler = this.hideWarning.bind(this); //To keep a a reference to the function/method in the correct scope.
    
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
    
        // @TODO: Make it possible to send with callback function that will be run once the x-button of warning is clicked.
        public constructor(warning:Error) {
            this.warning = warning;
            this.warningElement = photobooth.Main.ui.warning;
            this.displayWarning();
        }
    
        
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
    
        /**
         * displayWarning
         * Displays the error/warning, adds eventlisteners
         * @return void
         * @memberof Warning
         */
        private displayWarning():void {
            // Error/Warning name - message mapping
            var map = {
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
            this.warningElement.style.display = "block";
            this.warningElement.innerHTML = map[this.warning.name];
            this.warningElement.addEventListener("click", this.eventHandler, false);

            // Log
            console.error(this.warning.name, this.warning.message);
        }
        
        /**
         * hideWarning
         * Hides the warning bar
         * @return void
         * @memberof Warning
         */
        private hideWarning():void {
            this.warningElement.style.display = "none";
            this.warningElement.innerHTML = "";
            this.warningElement.removeEventListener("click", this.eventHandler, false);
        }
    }
}