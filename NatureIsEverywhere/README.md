# <a name="natureiseverywhere"></a>Nature Is Everywhere

An illustrated map of Pittsburgh sparkles. The visitor is prompted to select which parts of the map contain nature. There is only one correct answer. Right or wrong, the visitor is presented with a fact about wildlife in Pittsburgh.

![Nature Is Everywhere installation view](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/NatureIsEverywhere.gif)

This application is a simple Electron application featuring:
* Irregular-shaped touch targets (SVG)
* A satisfying lure screen animation (CSS transitions)

This project was developed for Mac OS X, but the frameworks used are cross-platform. <br/>
Some of these instructions will require modification to work on a Windows/Linux machine.

## Running
* Open Terminal
* Navigate to ```WeAreNature/NatureIsEverywhere```
* ```npm i```
* ```npm start```

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Navigate to ```WeAreNature/NatureIsEverywhere/natures-is-everywhere-darwin-x64```
* Launch application

## Building
* Open Terminal
* Install [electron packager](https://github.com/electron-userland/electron-packager) globally ```npm install electron-packager -g```
* Navigate to ```WeAreNature/NatureIsEverywhere```
* ```electron-packager .```

## Installing As Exhibit (OS X)

### <a name="keepappopen"></a>Keep App Open

Ensure that the application is always open by adding this to your crontab:

```* * * * * open -a /absolute/path/to/application```

### Hide System Menus
* Right-click application and select 'Show Package Contents'
* Find and open Info.plist
* Add key ```Application UI Presentation Mode``` with value ```3``` (all hidden)

### Prevent Crash Dialogs
* In Terminal, ```defaults write com.apple.CrashReporter DialogType none```
* In Terminal, ```defaults write NSGlobalDomain NSQuitAlwaysKeepsWindows -bool false```


### <a name="dailyemail"></a>Send Screenshots To Your Email

* Copy [mailer.py](https://github.com/CMP-Studio/WeAreNature/blob/master/_HelpfulThings/mailer.py) into your home directory and edit it with your email address, subject line, etc... 
* Automate taking and sending a screenshot (daily at 7am) by adding this to your crontab:

```0 7 * * * "/usr/sbin/screencapture" -f $HOME/email.jpg && sleep 5 && python $HOME/mailer.py```


### See This Guide For More Tips
[https://github.com/laserpilot/Installation_Up_4evr](https://github.com/laserpilot/Installation_Up_4evr)


![Nature Is Everywhere installation view](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/NatureIsEverywhere_CloseUp.jpg)

