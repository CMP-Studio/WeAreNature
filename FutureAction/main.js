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
    selected: false,
  },
  '002': {
    title: "Use Less Water",
    description: "nchaow",
    scope: 'WE',
    selected: false,
  },
  '003': {
    title: "Recycle",
    description: "nchaow",
    scope: 'ME',
    selected: false,
  },
};

exports.categories = {
  trees: {
    title: "trees",
    icon: "images/TreeIcon.png",
    description: "nchaow",
    actions: ['001', '002'],
    selected: false,
  },
  birds: {
    title: "birds",
    icon: "images/WaterIcon.png",
    description: "nchaow",
    actions: ['003', '002'],
    selected: false,
  },
  mountains: {
    title: "mountains",
    icon: "images/MountainIcon.png",
    description: "nchaow",
    actions: ['003', '001'],
    selected: false,
  },
};

exports.sessionCategories = [];
exports.sessionActions = [];

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

      pollWindow.send('voteSuccessful');
      sceneWindow.loadURL(`file://${__dirname}/actions.html`);
    } catch (e) {
      console.log(e);
    }
});

// TOGGLE CATEGORY
ipcMain.on('toggleCategory', (event, category) => {
    try {
      if (this.categories[category].selected) {
        // remove from session categories
        this.sessionCategories = this.sessionCategories.filter(function (sessionCategory) {
          if (sessionCategory === category) return false;
          else return true;
        });
        // set selected to false
        this.categories[category].selected = false;
      } else {
        // add to session categories
        this.sessionCategories.push(category);
        // set selected to true
        this.categories[category].selected = true;
      }
      sceneWindow.send('toggleCategorySuccessful');
    } catch (e) {
      console.log(e);
    }
});

ipcMain.on('resetInteraction', (event, arg) => {
    try {
      this.sessionCategories = [];
      this.sessionActions = [];

      for (var category in this.categories) {
        this.categories[category].selected = false;
      }

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
