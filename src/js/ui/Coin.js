var ui;
(function (ui) {
    /**
     * Coin
     * Represents a Coin
     * @class Coin
     */
    class Coin {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(x, y) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.element = null;
            this.posX = 0;
            this.posY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.clicked = false;
            // Keep class global references to be able to remove eventlisteners, and
            // keep the this reference intact.
            this.md = this.onMouseDown.bind(this);
            this.mm = this.onMouseMove.bind(this);
            this.mu = this.onMouseUp.bind(this);
            this.flag = true;
            this.posX = x;
            this.posY = y;
            this.ui = photobooth.Main.ui;
            this.renderShelfItem();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        renderShelfItem() {
            this.createElements();
        }
        createElements() {
            var coin = document.createElement("div");
            coin.classList.add("coin");
            coin.style.top = this.posY - 38.5 + "px";
            coin.style.left = this.posX - 38.5 + "px";
            coin.style.zIndex = "10";
            coin.addEventListener("mousedown", this.md, false);
            this.element = coin;
        }
        onMouseMove(event) {
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
                    this.dispatchEvent();
                    var timer = setTimeout(this.removeCoin.bind(this), 500);
                    // clearTimeout(timer);
                }
            }
            else {
                this.element.style.backgroundImage = "url('assets/img/coin/coin-front.png')";
            }
        }
        onMouseDown(event) {
            this.offsetX = event.clientX - parseInt(this.element.style.left);
            this.offsetY = event.clientY - parseInt(this.element.style.top);
            this.ui.body.addEventListener("mousemove", this.mm, false);
            this.element.addEventListener("mouseup", this.mu, false);
        }
        onMouseUp(event) {
            this.ui.body.removeEventListener("mousemove", this.mm, false);
            this.element.removeEventListener("mouseup", this.mu, false);
        }
        collisionDetection(element1, element2) {
            var el1 = element1.getBoundingClientRect();
            var el2 = element2.getBoundingClientRect();
            return !((el1.bottom <= el2.top) ||
                (el1.top >= el2.bottom) ||
                (el1.right <= el2.left) ||
                (el1.left >= el2.right));
        }
        removeCoin() {
            this.element.parentElement.removeChild(this.element);
        }
        dispatchEvent() {
            var event = new Event("insert");
            this.ui.coin.children[0].children[1].dispatchEvent(event);
        }
    }
    ui.Coin = Coin;
})(ui || (ui = {}));
