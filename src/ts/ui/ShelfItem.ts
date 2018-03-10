namespace ui {
    /** 
     * ShelfItem
     * Represents a ShelfItem (a div with a provided classname)
     * @class ShelfItem
     */
    export class ShelfItem {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private ui:PhotoboothUI = null;
        public  element:HTMLElement = null;
        private class:string = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor(classname:string) {
            this.ui = photobooth.Main.ui;
            this.class = classname;
            this.renderShelfItem();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private renderShelfItem():void{
            this.createElements();
        }

        private createElements():void {
            var shelfItem = document.createElement("div");
                shelfItem.classList.add(this.class);
                shelfItem.addEventListener("mousedown", this.onMouseDown.bind(this), false);
            this.element = shelfItem;
        }
       
        private onMouseDown(event:MouseEvent):void {
            if (this.element.childNodes.length < 1) {
                var coin = new Coin(event.clientX, event.clientY);
                this.element.appendChild(coin.element);
            }
        }
    }
}