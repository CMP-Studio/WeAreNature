'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow } = electron;

//////////////////////// EXPORTS ////////////////////////

//////////////////////// WINDOWS ////////////////////////

var mapWindow = null;

// CREATE WINDOWS
app.on('ready', () => {
  mapWindow = new BrowserWindow({ width: 1920, height: 1080, frame: false, resizeable: false });
	mapWindow.loadURL(`file://${__dirname}/map.html`);
	mapWindow.setResizable(false);
  mapWindow.setMenu(null);
});
