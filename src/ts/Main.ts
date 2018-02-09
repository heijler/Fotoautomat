/**
 * Main Class
 */

abstract class Main {
    static canvas = null;
    static video = null;
    static videoFeed:Promise <void | MediaStream> = null;
    static constraints = null;

    static init() {
        console.log("Main.init");
        var pb = new Photobooth();
    }

}
window.addEventListener("load", Main.init, false);