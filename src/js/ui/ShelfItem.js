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
        /**
         * renderShelfItem
         * Starting point for the class
         */
        renderShelfItem() {
            this.createElements();
        }
        /**
         * createElements
         * Creates elements, attributes and eventlisteners
         */
        createElements() {
            var shelfItem = document.createElement("div");
            shelfItem.classList.add(this.class, "shine");
            shelfItem.addEventListener("mousedown", this.onMouseDown.bind(this), false);
            this.element = shelfItem;
        }
        /**
         * onMouseDown
         * Handles mouse down events
         * @param event
         */
        onMouseDown(event) {
            if (this.element.childNodes.length < 1) {
                this.element.classList.remove("shine");
                var coin = new ui.Coin(event.clientX, event.clientY);
                this.element.appendChild(coin.element);
            }
        }
    }
    ui.ShelfItem = ShelfItem;
})(ui || (ui = {}));
