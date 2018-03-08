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
        public constructor(text:string, image:string, height:number = 150, width:number = 300) {
            this.ui = photobooth.Main.ui;
            this.text = text;
            this.image = image;
            this.width = width;
            this.height = height;
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
                signWrapper.style.height = this.height + "px";
                signWrapper.style.width = this.width + "px";

            var sign = document.createElement("div");
                sign.classList.add("sign");

            var title = document.createElement("h3");
                title.classList.add("signTitle");
                title.textContent = this.text;

            var image = document.createElement("img");
                image.src = this.image;
                console.log("image height", image.height);

            sign.appendChild(title);
            sign.appendChild(image);
            signWrapper.appendChild(sign);
            this.element = signWrapper;
        }
       
    }
}