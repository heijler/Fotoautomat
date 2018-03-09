var ui;
(function (ui) {
    /**
     * Reflection
     * Represents the reflection/mirror
     * @class Reflection
     */
    class PhotoboothUI extends ui.UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            super();
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        init() {
            this.createElements();
        }
        createElements() {
            this._wrapper = document.createElement("div");
            this._warning = document.createElement("div");
            this._coin = document.createElement("div");
            this._start = document.createElement("div");
            this._export = document.createElement("div");
            this._frame = document.createElement("div");
            this._videoOverlay = document.createElement("div");
            this._eyeLevel = document.createElement("div");
            this._videoContainer = document.createElement("div");
            this._hal9000 = document.createElement("img");
            this._video = document.createElement("video");
            this._canvas = document.createElement("canvas");
            this.assignAttributes();
        }
        assignAttributes() {
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
            this._hal9000.draggable = false;
            this._video.id = "reflectionVideo";
            this._canvas.id = "canvas";
            this.createComponents();
            this.appendElements();
        }
        appendElements() {
            // Clone wrapper elements
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
            stripsWrap.appendChild(this._canvas);
            // Append to body
            this._body.appendChild(warnWrap);
            this._body.appendChild(controlsWrap);
            this._body.appendChild(videoWrap);
            this._body.appendChild(stripsWrap);
        }
        createComponents() {
            this.createCoinslot();
            this.createStartbutton();
            this.createExportslot();
        }
        createCoinslot() {
            var coinslot = new ui.Coinslot();
            this._coin.appendChild(coinslot.element);
        }
        createStartbutton() {
            var startbutton = new ui.Startbutton();
            this._start.appendChild(startbutton.element);
        }
        createExportslot() {
            var exportSlot = new ui.Export();
            this._export.appendChild(exportSlot.element);
        }
    }
    ui.PhotoboothUI = PhotoboothUI;
})(ui || (ui = {}));
