'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow} = electron;

//////////////////////// EXPORTS ////////////////////////

//////////////////////// WINDOWS ////////////////////////

var FromMeToWe = null;

// CREATE WINDOWS
app.on('ready', () => {
    FromMeToWe = new BrowserWindow({ width: 1920, height: 1080, resizable: false, frame: false, fullscreen: true });
    FromMeToWe.loadURL(`file://${__dirname}/FromMeToWe.html`);
    FromMeToWe.setMenu(null);
});