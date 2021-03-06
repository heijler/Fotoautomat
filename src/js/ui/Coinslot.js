var ui;
(function (ui) {
    /**
     * Coinslot
     * Represents the coinslot
     * @class Coinslot
     */
    class Coinslot {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.sign = null;
            this.element = null;
            this.child = null;
            this.ui = photobooth.Main.ui;
            this.sign = new ui.Sign("Insert coin here", "assets/img/coin-arrow.svg");
            this.renderCoinslot();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        /**
         * renderCoinslot
         * Starting point for the class
         */
        renderCoinslot() {
            this.createElements();
        }
        /**
         * createElements
         * To create the elements, attributes and appends.
         */
        createElements() {
            var coinslotWrapper = document.createElement("div");
            coinslotWrapper.classList.add("coinslotWrapper");
            var coinslot = document.createElement("div");
            coinslot.classList.add("coinslot");
            coinslot.style.height = this.sign.element.style.height;
            coinslotWrapper.appendChild(this.sign.element);
            coinslotWrapper.appendChild(coinslot);
            this.child = coinslot;
            this.element = coinslotWrapper;
        }
    }
    ui.Coinslot = Coinslot;
})(ui || (ui = {}));
