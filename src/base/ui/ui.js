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
            this.createWindow

            app.on("window-all-closed", () => {
                if (process.platform !== "darwin") app.quit;
            })

            app.on("activate", () => {
                if (BrowserWindow.getAllWindows().length === 0) this.createWindow;
            })

        })
    }

    createWindow(){

        const win = new BrowserWindow({
            width: this.options.width || 800,
            height: this.options.height || 600
        })

        win.loadFile("index.html");
    }

}

module.exports = UI;