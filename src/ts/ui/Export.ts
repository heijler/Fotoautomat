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

        private renderExportslot():void{
            this.createElements();
        }

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

        private onMouseOver(event:Event):void {
            // console.log(this.ui.export.children[0].children[1].children[0]);
            // console.log(this.element.children[1].children[0]);
            (<HTMLElement>this.element.children[1].children[0]).style.display = "block";
        }

        private onMouseOut(event:Event):void {
            // console.log("mouseout!");
            (<HTMLElement>this.element.children[1].children[0]).style.display = "none";
        }
       
    }
}