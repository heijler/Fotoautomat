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
            this.sign = new ui.Sign("Photo delivery here", "assets/img/bg-pattern.png");
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
            var exportEl = document.createElement("div");
            exportEl.classList.add("export");
            exportEl.appendChild(exportDivider);
            exportWrapper.appendChild(this.sign.element);
            exportWrapper.appendChild(exportEl);
            this.element = exportWrapper;
        }
    }
    ui.Export = Export;
})(ui || (ui = {}));
