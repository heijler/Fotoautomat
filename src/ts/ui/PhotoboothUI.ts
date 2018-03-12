namespace ui {
    /** 
     * PhotoboothUI
     * Represents the PhotoboothUI
     * @class PhotoboothUI
     */
    export class PhotoboothUI extends UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------


        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        public constructor() {
            super();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        /**
         * init
         * Starting point for the class
         */
        public init():void {
            this.createElements();
        }


        /**
         * createElements
         * Creates the UI elements.
         */
        private createElements():void {
            this._wrapper = document.createElement("div");
            this._warning = document.createElement("div");
            this._coin = document.createElement("div");

            var cs = new Coinslot();
            this._coinSlotWrapper = cs.element;
            this._coinSlot = cs.child;
            this._start = document.createElement("div");
            this._export = document.createElement("div");
            this._frame = document.createElement("div");
            this._videoOverlay = document.createElement("div");
            this._eyeLevel = document.createElement("div");
            this._videoContainer = document.createElement("div");
            this._hal9000 = document.createElement("img");
            this._video = document.createElement("video");
            this._canvas = document.createElement("canvas");
            this._tempCanvas = document.createElement("canvas");
            this._shelf = document.createElement("div");
            this._flash = document.createElement("div");
            this.assignAttributes();
        }


        /**
         * AssignAttributes
         * Assigns the attributes to the UI elements
         */
        private assignAttributes():void {
            this._wrapper.classList.add("wrapper");
            this._warning.id = "warning";
            this._coin.id = "coin";
            this._coin.classList.add("controls");
            this._start.id = "start";
            this._start.classList.add("controls");
            this._export.id = "export";
            this._export.classList.add("controls");
            this._frame.id = "frame";
            this._videoOverlay.id = "videoOverlay";
            this._eyeLevel.id = "eyeLevel";
            this._videoContainer.id = "videoContainer";
            this._hal9000.id = "hal9000";
            this._hal9000.src = "assets/img/HAL9000.png";
            this._hal9000.draggable = false;
            this._video.id = "reflectionVideo";
            this._canvas.id = "canvas";
            this._tempCanvas.id = "tempCanvas";
            this._shelf.classList.add("shelfWrapper");
            this._flash.classList.add("flash");
            this.createComponents();
            this.appendElements();
        }


        /**
         * appendElements
         * Appends the UI elements
         */
        private appendElements():void {
            // Clone wrapper elements
            
            this._coin.appendChild(this._coinSlotWrapper);
            // Adding classnames and then removing, so that other elements won't get it..            
            this._wrapper.classList.add("controlWrapper");
            var controlsWrap = this._wrapper.cloneNode();
            this._wrapper.classList.remove("controlWrapper");

            this._wrapper.classList.add("videoWrapper");
            var videoWrap = this._wrapper.cloneNode();
            this._wrapper.classList.remove("videoWrapper");

            this._wrapper.classList.add("stripsWrapper");
            var stripsWrap = this._wrapper.cloneNode();
            this._wrapper.classList.remove("stripsWrapper");

            
            this._wrapper.classList.add("warningWrapper");
            var warnWrap = this._wrapper.cloneNode();
            this._wrapper.classList.remove("warningWrapper");

            // Append elements to wrapper elements
            warnWrap.appendChild(this._warning);

            controlsWrap.appendChild(this._coin);
            controlsWrap.appendChild(this._start);
            controlsWrap.appendChild(this._export);

            this._videoContainer.appendChild(this._hal9000);
            this._videoContainer.appendChild(this._video);
            this._videoOverlay.appendChild(this._eyeLevel);
            this._frame.appendChild(this._videoOverlay);
            this._frame.appendChild(this._videoContainer);
            videoWrap.appendChild(this._frame);
            stripsWrap.appendChild(this._shelf);

            
            // Append to body
            this._body.appendChild(this._flash);
            this._body.appendChild(warnWrap);
            this._body.appendChild(controlsWrap);
            this._body.appendChild(videoWrap);
            this._body.appendChild(stripsWrap);
            this._body.appendChild(this._canvas);
            this._body.appendChild(this._tempCanvas);
        }


        /**
         * createComponents
         * Starting point for creating certain components
         */
        private createComponents():void {
            this.createStartbutton();
            this.createExportslot();
            this.createShelf();
        }


        /**
         * createStartbutton
         * Creates the startbutton
         */
        private createStartbutton():void {
            var startbutton = new Startbutton();
            this._start.appendChild(startbutton.element);
        }


        /**
         * createExportslot
         * Creates the export component
         */
        private createExportslot():void {
            var exportSlot = new Export();
            this._export.appendChild(exportSlot.element);
        }

        
        /**
         * createShelf
         * Creates the shelf
         */
        private createShelf():void {
            var shelf = new Shelf();
            this._shelf.appendChild(shelf.element);
        }
    }
}