'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

//////////////////////// EXPORTS ////////////////////////

//////////////////////// WINDOWS ////////////////////////

var mapWindow = null;

// CREATE WINDOWS
app.on('ready', () => {
    mapWindow = new BrowserWindow({ width: 960, height: 600, resizable: false });
    mapWindow.loadURL(`file://${__dirname}/map.html`);
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
