namespace ui {
    /** 
     * Shelf
     * Represents the Shelf
     * @class Shelf
     */
    export class Shelf {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private ui:PhotoboothUI = null;
        public  element:HTMLElement = null;
        public  shelfItems:Array<ShelfItem> = new Array();

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor() {
            this.ui = photobooth.Main.ui;
            this.renderShelf();
        }
        
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        
        /**
         * 
         */
        private renderShelf():void{
            this.shelfItems.push(new ShelfItem("coinstack"));
            this.createElements();
        }

        /**
         * 
         */
        private createElements():void {
            var shelf = document.createElement("div");
                shelf.classList.add("shelf");

            this.shelfItems.forEach(function(item) {
                shelf.appendChild(item.element);
            });

            this.element = shelf;
        }
       
    }
}