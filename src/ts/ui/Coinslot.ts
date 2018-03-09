namespace ui {
    /** 
     * Coinslot
     * Represents the coinslot
     * @class Coinslot
     */
    export class Coinslot {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private ui:PhotoboothUI = null;
        private sign:Sign = null;
        public element:HTMLElement = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor() {
            this.ui = photobooth.Main.ui;
            this.sign = new Sign("Insert coin here", "assets/img/coin-arrow.svg");
            this.renderCoinslot();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private renderCoinslot():void{
            this.createElements();
        }

        private createElements():void {
            var coinslotWrapper = document.createElement("div");
                coinslotWrapper.classList.add("coinslotWrapper");
            var coinslot = document.createElement("div");
                coinslot.classList.add("coinslot");
                coinslot.style.height = this.sign.element.style.height;
            coinslotWrapper.appendChild(this.sign.element);
            coinslotWrapper.appendChild(coinslot);
            this.element = coinslotWrapper;

        }
       
    }
}