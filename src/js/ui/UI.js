var ui;
(function (ui) {
    class UI {
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        constructor() {
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            this._wrapper = null;
            this._warning = null;
            this._body = null;
            this._coin = null;
            this._coinSlot = null;
            this._start = null;
            this._export = null;
            this._frame = null;
            this._videoOverlay = null;
            this._eyeLevel = null;
            this._videoContainer = null;
            this._hal9000 = null;
            this._video = null;
            this._canvas = null;
            this._shelf = null;
            this._body = document.getElementsByTagName("body")[0];
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        //----------------------------------------------------------------------
        // Getters
        //----------------------------------------------------------------------
        get warning() {
            return this._warning;
        }
        get canvas() {
            return this._canvas;
        }
        get video() {
            return this._video;
        }
        get videoContainer() {
            return this._videoContainer;
        }
        get videoOverlay() {
            return this._videoOverlay;
        }
        get body() {
            return this._body;
        }
        get shelf() {
            return this._shelf;
        }
        get coin() {
            return this._coin;
        }
        get coinSlot() {
            return this._coinSlot;
        }
        get start() {
            return this._start;
        }
    }
    ui.UI = UI;
})(ui || (ui = {}));
