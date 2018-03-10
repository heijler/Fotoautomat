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
            this.renderShelfItem();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private renderShelfItem():void{
            this.createElements();
        }

        private createElements():void {
            var coin = document.createElement("div");
                coin.classList.add("coin");
                coin.style.top = this.posY - 38.5 + "px";
                coin.style.left = this.posX - 38.5 + "px";
                coin.style.zIndex = "10";
                coin.addEventListener("mousedown", this.md, false);
            this.element = coin;
        }

        private onMouseMove(event:MouseEvent):void {
            this.element.style.top = event.clientY - this.offsetY + "px";
            this.element.style.left = event.clientX - this.offsetX + "px";

            // this.ui.coin.children[0].children[1] == coinslot, but it's not a safe
            // reference to the element.
            if (this.collisionDetection(this.element, this.ui.coin.children[0].children[1])) {
                this.element.style.backgroundImage = "url('assets/img/coin/coin-side.png')";
                if (this.flag) {
                    var audio = new Audio("assets/audio/Inserting Coin.wav");
                    audio.play();
                    this.flag = false;

                    var timer = setTimeout(this.removeCoin.bind(this), 500);
                    // clearTimeout(timer);
                    
                }
            } else {
                this.element.style.backgroundImage = "url('assets/img/coin/coin-front.png')";
            }
        }

        private onMouseDown(event:MouseEvent):void {
            this.offsetX = event.clientX - parseInt(this.element.style.left);
            this.offsetY = event.clientY - parseInt(this.element.style.top);
            this.ui.body.addEventListener("mousemove", this.mm, false);
            this.element.addEventListener("mouseup",   this.mu, false);
        }

        private onMouseUp(event:MouseEvent):void {
            this.ui.body.removeEventListener("mousemove", this.mm, false);
            this.element.removeEventListener("mouseup",   this.mu, false);
        }

        private collisionDetection(element1:Element, element2:Element):boolean {
            var el1 = element1.getBoundingClientRect();
            var el2 = element2.getBoundingClientRect();
            return !((el1.bottom <= el2.top) || 
                     (el1.top >= el2.bottom) || 
                     (el1.right <= el2.left) || 
                     (el1.left >= el2.right));
        }

        private removeCoin():void {
            this.element.parentElement.removeChild(this.element);
        }
    }
}