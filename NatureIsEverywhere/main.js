'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

//////////////////////// EXPORTS ////////////////////////

//////////////////////// WINDOWS ////////////////////////

var mapWindow = null;

// CREATE WINDOWS
app.on('ready', () => {
    mapWindow = new BrowserWindow({ width: 1080, height: 920 }); // frame: false, resizeable: false, fullscreen: true }); //resizable: false, type:'toolbar', fullscreen: true, frame: false, 'auto-hide-menu-bar': true, });
    mapWindow.loadURL(`file://${__dirname}/map.html`);
    mapWindow.setMenu(null);
});

//////////////////////// EVENTS ////////////////////////

// SELECT CATEGORY
ipcMain.on('selectCategory', (event, category) => {
    try {
      if (this.selectedCategory === category) this.selectedCategory = null;
      else this.selectedCategory = category;

      sceneWindow.send('render');
    } catch (e) {
      console.log(e);
    }
});
