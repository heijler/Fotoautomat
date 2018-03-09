namespace ui {
    /** 
     * Sign
     * Represents the Sign
     * @class Sign
     */
    export class Sign {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        private ui:PhotoboothUI = null;
        public  element:HTMLElement = null;
        private text:string = null;
        private image:string = null;
        private width:number = null;
        private height:number = null;

        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor(text:string, image:string) {
            this.ui = photobooth.Main.ui;
            this.text = text;
            this.image = image;
            this.renderSign();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        private renderSign():void{
            this.createElements();
        }

        private createElements():void {
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
}