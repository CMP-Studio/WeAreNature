'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

//////////////////////// EXPORTS ////////////////////////

exports.screen = 'SCENE'; // 'SCENE' 'PLEDGE RECORDED' 'INPUT EMAIL'

exports.votes = {
  trees: 0,
  birds: 0,
  mountains: 0,
};

exports.categories = {
  trees: {
    title: "trees",
    icon: "images/TreeIcon.png",
    description: "nchaow",
    actions: {
      '001': {
        title: "Clean Up Litter",
        description: "nchaow",
        scope: 'ME',
      },
      '002': {
        title: "Use Less Water",
        description: "nchaow",
        scope: 'WE',
      }
    },
  },
  birds: {
    title: "birds",
    icon: "images/WaterIcon.png",
    description: "nchaow",
    actions: {
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
    },
  },
  mountains: {
    title: "mountains",
    icon: "images/MountainIcon.png",
    description: "nchaow",
    actions: {
      '003': {
        title: "Recycle",
        description: "nchaow",
        scope: 'ME',
      },
    },
  },
};

exports.selectedCategory = null;

//////////////////////// WINDOWS ////////////////////////

var sceneWindow = null;
var pollWindow = null;

// CREATE WINDOWS
app.on('ready', () => {
    sceneWindow = new BrowserWindow({ width: 800, height: 800 });
    sceneWindow.loadURL(`file://${__dirname}/scene.html`);

    pollWindow = new BrowserWindow({ width: 200, height: 200 });
    pollWindow.loadURL(`file://${__dirname}/poll.html`);
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

// MAKE PLEDGE
ipcMain.on('makePledge', (event) => {
    try {
      this.votes[this.selectedCategory]++;

      this.screen = 'PLEDGE RECORDED';
      sceneWindow.send('render');
      pollWindow.send('render');
    } catch (e) {
      console.log(e);
    }
});

// MAKE PLEDGE
ipcMain.on('showEmailForm', (event) => {
    try {
      this.screen = 'INPUT EMAIL';
      sceneWindow.send('render');
    } catch (e) {
      console.log(e);
    }
});

// RESET INTERACTION
ipcMain.on('resetInteraction', (event, arg) => {
    try {
      this.selectedCategory = null;

      this.screen = 'SCENE';
      sceneWindow.send('render');
    } catch (e) {
      console.log(e);
    }
});
