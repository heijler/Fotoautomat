namespace ui {
    /** 
     * Reflection
     * Represents a reflection/mirror
     * @class Reflection
     */
    export class Reflection extends UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private stream:MediaStream = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(stream:MediaStream) {
            super();
            this.stream = stream;
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        
        renderReflection():void {

        }
    }
}