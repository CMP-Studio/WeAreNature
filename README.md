
# We Are Nature | Interactives

*NOTE: This repo and its instructions are a work-in-progress* <br/>

There are three interactive projects included in this repo:

* [**Nature Is Everywhere**](https://github.com/CMP-Studio/WeAreNature/tree/master/NatureIsEverywhere)

* [**Future Action**](https://github.com/CMP-Studio/WeAreNature/tree/master/FutureAction)

* [**Migration Patterns Data Viz**](https://github.com/CMP-Studio/WeAreNature/tree/master/NatureIsEverywhere)

And some helpful tools for using the projects in an exhibit/kiosk:

* [**Keep App Open**](#keepappopen) (mac, linux)

* [**Daily Screenshot To Email**](#dailyemail) (mac, linux)

* [**Addtional Tips For Mac**](#mactips)


These projects were developed for Mac OSx, but the frameworks used are cross-platform. <br/>
It may take a few additional steps to run on Windows/Linux.

<br/>

## <a name="natureiseverywhere"></a>Nature Is Everywhere

An illustrated map of Pittsburgh sparkles. The visitor is prompted to select which parts of the map contain nature. There is only one correct answer. Right or wrong, the visitor is presented with a fact about wildlife in Pittsburgh.

![Nature Is Everywhere installation view](https://github.com/CMP-Studio/WeAreNature/blob/master/images/NatureIsEverywhere.gif)

This application is a simple Electron application featuring:
* Irregular-shaped touch targets (SVG)
* A satisfying lure screen animation (CSS transitions)

##### Running the application
* Open Terminal
* Navigate to ```WeAreNature/NatureIsEverywhere```
* ```npm i```
* ```npm start```

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Navigate to ```WeAreNature/NatureIsEverywhere/natures-is-everywhere-darwin-x64```
* Launch application


##### Building the application
* Open Terminal
* Install [electron packager](https://github.com/electron-userland/electron-packager) globally ```npm install electron-packager -g```
* Navigate to ```WeAreNature/NatureIsEverywhere```
* ```electron-packager .```

<br/>

## <a name="futureaction"></a>Future Action

This interactive was designed to encourage individuals to get involved with Pittsburgh organizations that deal with enviromental issues. An illustrated landscape is labeled with five climate-related systems: Water, Food, Energy, Habitat and Transportation. The visitor selects a system and is shown three actions related to that system. The visitor selects an action and pledges to complete it. They can opt to recieve two emails: The first is sent immediately, it provides links to local organizations working on that action. The second email is sent in six months to remind them of the pledge they made. On a seperate screen, we display a tally of which systems visitors have pledged to protect.


### **Touchscreens**

This application is a simple Electron application featuring:
* Irregular-shaped touch targets (SVG)
* Integration with API for sending votes and emails to AWS server

NOTE: In our installation of this interactive, there are two touchscreens running the main application. Each application says whether its computer is located to the left or right of the poll.

##### Running the application
* Open Terminal
* Navigate to ```WeAreNature/FutureAction```
* ```npm i```
* ```npm start```

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Navigate to ```WeAreNature/FutureAction/FutureActionLeft-darwin-x64``` 
* Launch application



##### Building the application
* Change ```WeAreNature/FutureAction/FromMeToWe.html line 29``` to ```computerLocation = "Left"```
* Open Terminal
* Install [electron packager](https://github.com/electron-userland/electron-packager) globally ```npm install electron-packager -g```
* Navigate to ```WeAreNature/FutureAction```
* ```electron-packager .```
* Rename the application so that a second version can be re-exported with ```computerLocation = "Right"```

### **Poll**

### **Backend** 

## <a name="migrationpatterns"></a>Migration Patterns Data Viz

### **Software**

### **Hardware**

## <a name="keepappopen"></a>Keep App Open

This script will check if the app is open.
If the app is closed, this will reopen it. 

Set the cron tab to run this every minute/hour/whenever you'd like. 


### **Mac**

```open -a 'path/App'```

Crontab example:

```* * * * * open -a $HOME/WeAreNature/FutureAction/FutureActionLeft-darwin-x64/FutureActionLeft.app```

### **Linux**

```open -a 'path/App'```

Crontab example:

```* * * * * open -a $HOME/WeAreNature/FutureAction/FutureActionLeft-darwin-x64/FutureActionLeft.app```


## <a name="dailyemail"></a>Daily Screenshot To Email


### **Mac**

### **Linux**

## <a name="mactips"></a>Additional Tips For Mac

##### Prevent the top menu and dock from appearing while application is open:
* Right-click application and select 'Show Package Contents'
* Find and open Info.plist
* Add key ```Application UI Presentation Mode``` with value ```3``` (all hidden)

##### In case of crash, prevent dialogs:
* In Terminal, ```defaults write com.apple.CrashReporter DialogType none```
* In Terminal, ```defaults write NSGlobalDomain NSQuitAlwaysKeepsWindows -bool false```

##### Also see this helpful guide for setting up a mac to run as an exhibit/kiosk:
[https://github.com/laserpilot/Installation_Up_4evr](https://github.com/laserpilot/Installation_Up_4evr)


