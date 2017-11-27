# <a name="natureiseverywhere"></a>Future Action

This interactive was designed to encourage individuals to get involved with Pittsburgh organizations that deal with enviromental issues. An illustrated landscape is labeled with five climate-related systems: Water, Food, Energy, Habitat and Transportation. The visitor selects a system and is shown three actions related to that system. The visitor selects an action and pledges to complete it. They can opt to recieve two emails: The first is sent immediately, it provides links to local organizations working on that action. The second email is sent in six months to remind them of the pledge they made. On a seperate screen, we display a tally of which systems visitors have pledged to protect.

This interactive exhibit has three components: 
* [**Voting Application**](#voting)
* [**Poll**](#poll)
* [**Backend**](#backend)

<br/>

# <a name="voting"></a>Voting Application

Our exhibition has two computers running the voting application. The applications are mostly the same, but have one key difference: a value indicating whether the touchscreen in installed to the left or right of the poll monitor. This information is used by the poll as it animates the vote. In the instructions below, I will describe setting up the left computer.

This application was developed for Mac OS X, but the frameworks used are cross-platform. <br/>
Some of these instructions will require modification to work on a Windows/Linux machine.

## Secrets
To communicate with the database, you will need to provide the API secret in a file called secrets.js. See [VotingApplication/secretsExample.js](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/VotingApplication/secretsExample.js). If you work at the Innovation Studio, find the secret in Dropbox. 

## Running
* Open Terminal
* Navigate to ```WeAreNature/FutureAction/VotingApplication```
* ```npm i```
* ```npm start```

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Navigate to ```WeAreNature/FutureAction/VotingApplication/future-action-left-darwin-x64```
* Launch application

## Building
* Open [VotingApplication/FromMeToWe.html](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/VotingApplication/FromMeToWe.html) and set ```computerLocation: "Left"```
* Open [VotingApplication/package.json](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/VotingApplication/package.json) and set ```"name": "future-action-left"```
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

<br/>

# <a name="poll"></a>Poll

The poll is an application developed with Electron and React. The poll is displayed on a large monitor mounted on the wall between the two voting stations, it is not made to work on a touchscreen. It listens for new votes via a websocket.

This application was developed for Linux, but the frameworks used are cross-platform. <br/>
Some of these instructions will require modification to work on a Windows/Mac machine.

## Secrets
To communicate with the database, you will need to provide the API secret in a file called secrets.js. See [Poll/javascripts/secretsExample.js](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/Poll/javascripts/secretsExample.js). If you work at the Innovation Studio, find the secret in Dropbox. 

## Running
* Open Terminal
* Navigate to ```WeAreNature/FutureAction/Poll```
* ```npm run-script watch```
* Open a new Terminal, navigate to ```WeAreNature/FutureAction/Poll```
* ```npm start```

## Installing As Exhibit (Linux)

### <a name="keepappopen"></a>Keep App Open

* Open Terminal
* ```sudo apt-get update```
* ```sudo apt-get install run-one```
* Put [npmstart.sh]() and [electronstart.sh]() into your home directory
* Add these two lines to your crontab: <br/>
```* * * * * DISPLAY=:0 ``` and <br/>
```* * * * * DISPLAY=:0 ``` and <br/>

### <a name="dailyemail"></a>Send Screenshots To Your Email



# <a name="backend"></a>Backend


![Future Action installation view](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/FutureAction_Wide.jpg)


