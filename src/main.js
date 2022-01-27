/**
 * Program entry code
 * 
 * 
 */

/* -- Dependencies, imports and constants -- */ 
const UI = require("./base/ui/ui.js");

class NotionMain {

    main(){
        // Identify platorm and other resources
        const Platorm = 0;

        // Create IPC Server handler
        const IPCServer = 0;

        
        // Start data handle 
        const DataHandle = 0;

        // Start UI
        const GUI = new UI;
        GUI.start();
        
        // Initiate update service *there might not be any*
        const UpdateService = 0;
    }


}


const notion = new NotionMain();
notion.main();