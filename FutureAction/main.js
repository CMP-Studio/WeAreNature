'use strict'

// IMPORTS
var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

// EXPORTS
exports.votes = {
  trees: 0,
  birds: 0,
  mountains: 0,
  bike: 0,
};

exports.actions = {
  '001': {
    title: "trees",
    description: "nchaow",
    scope: 'ME',
  },
  '002': {
    title: "air",
    description: "nchaow",
    scope: 'WE',
  },
  '003': {
    title: "air",
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
  bike: {
    title: "green",
    description: "nchaow",
    actions: ['003', '001'],
  },
};

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
ipcMain.on('vote', (event, arg) => {
    console.log('vote received');
    try {
      this.votes[arg]++;
      sceneWindow.send('voteSuccessful');
      pollWindow.send('voteSuccessful');
      // sceneWindow.loadURL(`file://${__dirname}/poll.html`);
    } catch (e) {
      console.log(e);
    }
});
