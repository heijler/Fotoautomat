var ui;
(function (ui) {
    /**
     * Shelf
     * Represents the Shelf
     * @class Shelf
     */
    class Shelf {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.element = null;
            this.shelfItems = new Array();
            this.ui = photobooth.Main.ui;
            this.renderShelf();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        renderShelf() {
            this.shelfItems.push(new ui.ShelfItem("coinstack"));
            this.createElements();
        }
        createElements() {
            var shelf = document.createElement("div");
            shelf.classList.add("shelf");
            this.shelfItems.forEach(function (item) {
                shelf.appendChild(item.element);
            });
            this.element = shelf;
        }
    }
    ui.Shelf = Shelf;
})(ui || (ui = {}));
