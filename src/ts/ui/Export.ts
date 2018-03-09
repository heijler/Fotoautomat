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
            var exportEl = document.createElement("div");
                exportEl.classList.add("export");

            exportEl.appendChild(exportDivider);
            exportWrapper.appendChild(this.sign.element);
            exportWrapper.appendChild(exportEl);
            this.element = exportWrapper;

        }
       
    }
}