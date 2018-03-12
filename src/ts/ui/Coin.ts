namespace ui {
    /** 
     * Coin
     * Represents a Coin
     * @class Coin
     */
    export class Coin {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        public static INSERT_EVENT:string = "coin-insert";
        private ui:PhotoboothUI = null;
        public  element:HTMLElement = null;
        private posX:number = 0;
        private posY:number = 0;
        private offsetX:number = 0;
        private offsetY:number = 0;
        private clicked:boolean = false;

        // Keep class global references to be able to remove eventlisteners, and
        // keep the this reference intact.
        private md = this.onMouseDown.bind(this);
        private mm = this.onMouseMove.bind(this);
        private mu = this.onMouseUp.bind(this);

        private flag:boolean = true;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor(x:number, y:number) {
            this.posX = x;
            this.posY = y;
            this.ui = photobooth.Main.ui;
            this.renderCoin();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------


        /**
         * renderCoin
         * Starting point for the class.
         */
        private renderCoin():void{
            this.createElements();
        }


        /**
         * createElements
         * Creates the element and adds attributes, styles and eventlistener
         */
        private createElements():void {
            var coin = document.createElement("div");
                coin.classList.add("coin");
                coin.style.top = this.posY - 38.5 + "px";
                coin.style.left = this.posX - 38.5 + "px";
                coin.style.zIndex = "10";
                coin.addEventListener("mousedown", this.md, false);
            this.element = coin;
        }


        /**
         * onMouseMove
         * On mouse move, update the position of the coin
         * @param event 
         */
        private onMouseMove(event:MouseEvent):void {
            this.element.style.top = event.clientY - this.offsetY + "px";
            this.element.style.left = event.clientX - this.offsetX + "px";
            if (this.collisionDetection(this.element, this.ui.coinSlot)) {
                this.element.style.backgroundImage = "url('assets/img/coin/coin-side.png')";
                if (this.flag) {
                    var audio = new Audio("assets/audio/coin-insert.wav");
                    audio.play();
                    this.flag = false;
                    var timer = setTimeout(this.coinInsert.bind(this), 500); // Should be cleared when done
                }
            } else {
                this.element.style.backgroundImage = "url('assets/img/coin/coin-front.png')";
            }
        }


        /**
         * onMouseDown
         * Calculate the mouse-element offset and add eventListeners
         * @param event 
         */
        private onMouseDown(event:MouseEvent):void {
            this.offsetX = event.clientX - parseInt(this.element.style.left);
            this.offsetY = event.clientY - parseInt(this.element.style.top);
            this.ui.body.addEventListener("mousemove", this.mm, false);
            this.element.addEventListener("mouseup",   this.mu, false);
        }


        /**
         * onMouseUp
         * Remove eventlisteners
         * @param event 
         */
        private onMouseUp(event:MouseEvent):void {
            this.ui.body.removeEventListener("mousemove", this.mm, false);
            this.element.removeEventListener("mouseup",   this.mu, false);
        }


        /**
         * collisionDetection
         * Calculate if two elements have collided using their BoundingRect
         * Modified version of this: https://stackoverflow.com/a/9607413
         * @param element1 
         * @param element2 
         */
        private collisionDetection(element1:Element, element2:Element):boolean {
            var el1 = element1.getBoundingClientRect();
            var el2 = element2.getBoundingClientRect();
            return !((el1.bottom <= el2.top) || 
                     (el1.top >= el2.bottom) || 
                     (el1.right <= el2.left) || 
                     (el1.left >= el2.right));
        }


        /**
         * removeCoin
         * Remove the element
         */
        private removeCoin():void {
            this.element.parentElement.removeChild(this.element);
        }


        /**
         * coinInsert
         * When coin is inserted: removeCoin, and dispatch event
         */
        private coinInsert():void {
            this.removeCoin();
            this.dispatchEvent();
        }


        /**
         * dispatchEvent
         * Dispatches an event when coin is inserted
         */
        private dispatchEvent():void {
            var event = new Event(Coin.INSERT_EVENT);
            this.ui.coinSlot.dispatchEvent(event);
        }
    }
}