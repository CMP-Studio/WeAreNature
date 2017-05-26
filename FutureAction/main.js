'use strict'

// IMPORTS
var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

// EXPORTS
exports.votes = {
  trees: 0,
  birds: 0,
  mountains: 0,
};

exports.actions = {
  '001': {
    title: "Clean Up Litter",
    description: "nchaow",
    scope: 'ME',
  },
  '002': {
    title: "Use Less Water",
    description: "nchaow",
    scope: 'WE',
  },
  '003': {
    title: "Recycle",
    description: "nchaow",
    scope: 'ME',
  },
};

exports.categories = {
  trees: {
    title: "red",
    description: "nchaow",
    actions: ['001', '002'],
  },
  birds: {
    title: "blue",
    description: "nchaow",
    actions: ['003', '002'],
  },
  mountains: {
    title: "green",
    description: "nchaow",
    actions: ['003', '001'],
  },
};

exports.sessionCategories = null;
exports.sessionActions = null;

// WINDOWS
var sceneWindow = null;
var pollWindow = null;

// CREATE WINDOWS
app.on('ready', () => {
    sceneWindow = new BrowserWindow({ width: 800, height: 800 });
    sceneWindow.loadURL(`file://${__dirname}/scene.html`);

    pollWindow = new BrowserWindow({ width: 200, height: 200 });
    pollWindow.loadURL(`file://${__dirname}/poll.html`);
});

// EVENTS
ipcMain.on('vote', (event, ballot) => {
    try {
      for (var i = 0; i < ballot.length; i++) {
          this.votes[ballot[i]]++;
      }

      this.sessionCategories = ballot;
      console.log(this.sessionCategories);

      pollWindow.send('voteSuccessful');
      sceneWindow.loadURL(`file://${__dirname}/actions.html`);
    } catch (e) {
      console.log(e);
    }
});

ipcMain.on('resetInteraction', (event, arg) => {
    try {
      this.sessionCategories = null;
      this.sessionActions = null;

      sceneWindow.loadURL(`file://${__dirname}/scene.html`);
    } catch (e) {
      console.log(e);
    }
});

ipcMain.on('inputEmail', (event, arg) => {
    try {
      sceneWindow.loadURL(`file://${__dirname}/email.html`);
    } catch (e) {
      console.log(e);
    }
});
