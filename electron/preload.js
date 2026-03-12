const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // Window B uses this to send data
    sendData: (data) => ipcRenderer.send('data-to-main', data),

    // Window A uses this to listen for data
    onReceiveData: (callback) => ipcRenderer.on('data-from-main', (_event, value) => callback(value))
});
