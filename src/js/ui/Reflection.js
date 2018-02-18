var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ui;
(function (ui) {
    /**
     * Reflection
     * Represents the reflection/mirror
     * @class Reflection
     */
    var Reflection = /** @class */ (function (_super) {
        __extends(Reflection, _super);
        //----------------------------------------------------------------------
        // Constructor
        //----------------------------------------------------------------------
        function Reflection(stream) {
            var _this = _super.call(this) || this;
            //----------------------------------------------------------------------
            // Properties
            //----------------------------------------------------------------------
            _this.stream = null;
            _this.stream = stream;
            return _this;
        }
        //----------------------------------------------------------------------
        // Methods
        //----------------------------------------------------------------------
        Reflection.prototype.prepareVideo = function (stream) {
            var videoTrack = stream.getTracks();
            var videoSettings = videoTrack[0].getSettings();
            // Use values from settings to prepare video element here, this method needs to run before the stream is delegated to the video object.
        };
        Reflection.prototype.renderReflection = function (stream) {
            var _this = this;
            this.video.srcObject = stream;
            // Arrow function to keep the lexical scope.
            this.video.addEventListener("loadedmetadata", function (event) {
                _this.video.play();
            }, false);
            // this.video.addEventListener("loadedmetadata", function(event) {
            //     this.video.play();
            // }.bind(this), false);
        };
        return Reflection;
    }(ui.UI));
    ui.Reflection = Reflection;
})(ui || (ui = {}));
