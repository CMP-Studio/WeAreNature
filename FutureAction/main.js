'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

//////////////////////// EXPORTS ////////////////////////

//////////////////////// WINDOWS ////////////////////////

var FromMeToWe = null;

// CREATE WINDOWS
app.on('ready', () => {
    FromMeToWe = new BrowserWindow({ width: 1920, height: 1080, resizable: false }); // type:'toolbar', fullscreen: true, frame: false, 'auto-hide-menu-bar': true, });
    FromMeToWe.loadURL(`file://${__dirname}/FromMeToWe.html`);
    FromMeToWe.setMenu(null);
});

//////////////////////// EVENTS ////////////////////////

ipcMain.on('pledge', (event, object) => {
    try {
      // send pledge to database....
      FromMeToWe.send('pledgeRecorded');
    } catch (e) {
      console.log(e);
      FromMeToWe.send('pledgeNotRecorded');
    }
});


ipcMain.on('reminder', (event, object) => {
    try {
      // send reminder info to database....
      FromMeToWe.send('reminderRecorded');
    } catch (e) {
      console.log(e);
      FromMeToWe.send('reminderNotRecorded');
    }
});
