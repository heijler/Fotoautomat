namespace ui {
    export abstract class UI {
        //----------------------------------------------------------------------
        // Properties
        //----------------------------------------------------------------------
        protected _wrapper:HTMLElement        = null;
        protected _warning:HTMLElement        = null;
        protected _body:HTMLBodyElement       = null;
        protected _coin:HTMLElement           = null;
        protected _start:HTMLElement          = null;
        protected _export:HTMLElement         = null;
        protected _frame:HTMLElement          = null;
        protected _videoOverlay:HTMLElement   = null;
        protected _eyeLevel:HTMLElement       = null;
        protected _videoContainer:HTMLElement = null;
        protected _hal9000:HTMLImageElement   = null;
        protected _video:HTMLVideoElement     = null;
        // protected _canvas:HTMLCanvasElement   = null;
        protected _shelf:HTMLElement          = null;
        
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        protected constructor() {
            this._body = document.getElementsByTagName("body")[0];
        }

        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------

        //----------------------------------------------------------------------
        // Getters
        //----------------------------------------------------------------------
        public get warning():HTMLElement {
            return this._warning;
        }

        // public get canvas():HTMLCanvasElement {
        //     return this._canvas;
        // }

        public get video():HTMLVideoElement {
            return this._video;
        }

        public get videoContainer():HTMLElement {
            return this._videoContainer;
        }

        public get videoOverlay():HTMLElement {
            return this._videoOverlay;
        }

        public get body():HTMLElement {
            return this._body;
        }

        public get shelf():HTMLElement {
            return this._shelf;
        }

        public get coin():HTMLElement {
            return this._coin;
        }
    }
}