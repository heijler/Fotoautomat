namespace ui {
    /** 
     * Export
     * Represents the Export
     * @class Export
     */
    export class Export {
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
            this.sign = new Sign("Photo delivery here", "assets/img/export-arrow.svg");
            this.renderExportslot();
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        /**
         * renderExportslot
         * Starting point for class
         */
        private renderExportslot():void{
            this.createElements();
        }

        /**
         * createElements
         * Creates elements, adds attributes and eventlisteners
         */
        private createElements():void {
            var exportWrapper = document.createElement("div");
                exportWrapper.classList.add("exportSlotWrapper");
            var exportDivider = document.createElement("div");
                exportDivider.id = "exportSlotDivider";
            var photostripWrapper = document.createElement("div");
                photostripWrapper.classList.add("photostripWrapper");

            var exportOptions = document.createElement("div");
                exportOptions.id = "exportOptions";

            var exportImage = document.createElement("a");
                exportImage.classList.add("btn", "save");
                exportImage.textContent = "Save image";
            var exportPdf = document.createElement("a");
                exportPdf.classList.add("btn", "save");
                exportPdf.textContent = "Save PDF";
            var printPdf = document.createElement("a");
                printPdf.classList.add("btn", "print");
                printPdf.textContent = "Print PDF";

            var exportEl = document.createElement("div");
                exportEl.classList.add("export");

            exportEl.addEventListener("mouseover", this.onMouseOver.bind(this));
            exportEl.addEventListener("mouseout", this.onMouseOut.bind(this));
            // exportImage.addEventListener("click", this.onImageSave.bind(this));
            exportPdf.addEventListener("click", this.onPdfSave.bind(this));
            printPdf.addEventListener("click", this.onPrintPdf.bind(this));
                
            exportOptions.appendChild(exportImage);
            exportOptions.appendChild(exportPdf);
            exportOptions.appendChild(printPdf);

            exportEl.appendChild(exportOptions);
            exportEl.appendChild(exportDivider);
            exportEl.appendChild(photostripWrapper);
            exportWrapper.appendChild(this.sign.element);
            exportWrapper.appendChild(exportEl);
            this.element = exportWrapper;

        }


        // /**
        //  * onImageSave
        //  * @param event 
        //  */
        // private onImageSave(event:Event):void {
        //     var event:Event = new Event("save-image");
        //     this.ui.export.dispatchEvent(event);
        // }


        /**
         * onPdfSave
         * On click on save button an event will be dispatched
         * @param event 
         */
        private onPdfSave(event:Event):void {
            var event:Event = new Event("save-pdf");
            this.ui.export.dispatchEvent(event);
        }


        /**
         * onPrintPdf
         * On click on print button an event will be dispatched
         * @param event 
         */
        private onPrintPdf(event:Event):void {
            var event:Event = new Event("print-pdf");
            this.ui.export.dispatchEvent(event);
        }


        /**
         * onMouseOver
         * To display the export options on mouseover.
         * @param event 
         */
        private onMouseOver(event:Event):void {
            if(this.element.children[1].children[2].children.length > 0) {
                (<HTMLElement>this.element.children[1].children[0]).style.display = "block";
            }
        }


        /**
         * onMouseOut
         * To hide the export options on mouse out.
         * @param event 
         */
        private onMouseOut(event:Event):void {
            (<HTMLElement>this.element.children[1].children[0]).style.display = "none";
        }
       
    }
}