/**
 * UI.js
 * 
 * The UI entry point
 * 
 */

/* -- Imports and dependencies -- */
const { app, BrowserWindow } = require("electron");

class UI {

    constructor(options){
        this.options = options;
    } 

    start(){
        app.whenReady().then( () => {
            this.createWindow()

            app.on("window-all-closed", () => {
                app.exit(0)
            })

            app.on("activate", () => {
                if (BrowserWindow.getAllWindows().length === 0) this.createWindow();
            })

        })
    }

    createWindow(){

        const win = new BrowserWindow({
            minWidth: 850,
            minHeight: 600,
            width: 850,
            height: 600,
            center: true,
            backgroundColor: "#fff",

        })
        win.setMenuBarVisibility(false);
        win.loadFile("./base/ui/index.html");
    }

}

module.exports = UI;