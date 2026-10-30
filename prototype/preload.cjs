const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('companion', {
  hide: () => ipcRenderer.send('companion:close'),
  teleport: () => ipcRenderer.send('companion:teleport'),
  onGlitch: (callback) => ipcRenderer.on('companion:glitch', callback)
});
