var ui;
(function (ui) {
    /**
     * ShelfItem
     * Represents a ShelfItem (a div with a provided classname)
     * @class ShelfItem
     */
    class ShelfItem {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(classname) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.element = null;
            this.class = null;
            this.ui = photobooth.Main.ui;
            this.class = classname;
            this.renderShelfItem();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        renderShelfItem() {
            this.createElements();
        }
        createElements() {
            var shelfItem = document.createElement("div");
            shelfItem.classList.add(this.class);
            shelfItem.addEventListener("mousedown", this.onMouseDown.bind(this), false);
            this.element = shelfItem;
        }
        onMouseDown(event) {
            if (this.element.childNodes.length < 1) {
                var coin = new ui.Coin(event.clientX, event.clientY);
                this.element.appendChild(coin.element);
            }
        }
    }
    ui.ShelfItem = ShelfItem;
})(ui || (ui = {}));
