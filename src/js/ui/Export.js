var ui;
(function (ui) {
    /**
     * Export
     * Represents the Export
     * @class Export
     */
    class Export {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this.ui = null;
            this.sign = null;
            this.element = null;
            this.ui = photobooth.Main.ui;
            this.sign = new ui.Sign("Photo delivery here", "assets/img/export-arrow.svg");
            this.renderExportslot();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        renderExportslot() {
            this.createElements();
        }
        createElements() {
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
            exportImage.addEventListener("click", this.onImageSave.bind(this));
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
        onImageSave(event) {
            var event = new Event("save-image");
            this.ui.export.dispatchEvent(event);
        }
        onPdfSave(event) {
            var event = new Event("save-pdf");
            this.ui.export.dispatchEvent(event);
        }
        onPrintPdf(event) {
            var event = new Event("print-pdf");
            this.ui.export.dispatchEvent(event);
        }
        onMouseOver(event) {
            if (this.element.children[1].children[2].children.length > 0) {
                this.element.children[1].children[0].style.display = "block";
            }
        }
        onMouseOut(event) {
            this.element.children[1].children[0].style.display = "none";
        }
    }
    ui.Export = Export;
})(ui || (ui = {}));
