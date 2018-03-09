var ui;
(function (ui) {
    /**
     * Sign
     * Represents the Sign
     * @class Sign
     */
    class Sign {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor(text, image) {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.element = null;
            this.text = null;
            this.image = null;
            this.width = null;
            this.height = null;
            this.ui = photobooth.Main.ui;
            this.text = text;
            this.image = image;
            this.renderSign();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        renderSign() {
            this.createElements();
        }
        createElements() {
            var signWrapper = document.createElement("div");
            signWrapper.classList.add("signWrapper");
            var sign = document.createElement("div");
            sign.classList.add("sign");
            var title = document.createElement("h3");
            title.classList.add("signTitle");
            title.textContent = this.text;
            var image = document.createElement("img");
            image.src = this.image;
            image.draggable = false;
            sign.appendChild(title);
            sign.appendChild(image);
            signWrapper.appendChild(sign);
            this.element = signWrapper;
        }
    }
    ui.Sign = Sign;
})(ui || (ui = {}));
