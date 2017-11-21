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
* Open Terminal
* Navigate to ```WeAreNature/FutureAction/VotingApplication```
* ```npm i```
* ```npm start```

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Navigate to ```WeAreNature/FutureAction/VotingApplication/future-action-left-darwin-x64```
* Launch application

## Running
* Open Terminal
* Navigate to ```WeAreNature/FutureAction/VotingApplication```
* ```npm i```
* ```npm start```

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Navigate to ```WeAreNature/FutureAction/VotingApplication/future-action-left-darwin-x64```
* Launch application

## Building
* Open [FromMeToWe.html]() and set ```computerLocation: "Left"```
* Open [package.json]() and set ```"name": "future-action-left"```
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

<br/>

# <a name="backend"></a>Backend

