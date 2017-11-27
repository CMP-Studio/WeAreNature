# Migration Patterns Data Visualization

Are birds migrating sooner due to global warming? According to data collected at Powdermill Nature Reserve, the answer is yes. This playful visualization features over 6000 frames of animation, showing how birds migrate, mate, and raise their young. Visitors can scrub through a year at Powdermill using a spinning knob. They can also switch between data sets to compare the birds behavior 50 years ago and now.

The application was built with [openFrameworks](http://openframeworks.cc/) and [Arduino](https://www.arduino.cc/).
The final installation includes some rarer hardware, but there will be instructions on simulating a turning knob below.

## Running 

### <a name="keepappopen"></a>Simulating Hardware With Key Presses
The spinning knob and buttons can be simulated with the keyboard: <br/>
**q** to spin backwards <br/>
**w** to spin forwards <br/>
**q** to jump to 1960s <br/>
**q** to jump to 2010s <br/>

## Hardware


## Media



## Installing As Exhibit (OS X)

### Adjust The Mesh For Short Throw Projection


### <a name="keepappopen"></a>Keep App Open

Ensure that the application is always open by adding this to your crontab:

```* * * * * open -a /absolute/path/to/application```

### Hide System Menus
* Right-click application and select 'Show Package Contents'
* Find and open Info.plist
* Add key ```Application UI Presentation Mode``` with value ```3``` (all hidden)

### Set Desktop Background

Use [this image](https://github.com/CMP-Studio/WeAreNature/blob/master/_HelpfulThings/OutOfOrder.png).

### Prevent Crash Dialogs
* In Terminal, ```defaults write com.apple.CrashReporter DialogType none```
* In Terminal, ```defaults write NSGlobalDomain NSQuitAlwaysKeepsWindows -bool false```

### <a name="dailyemail"></a>Send Screenshots To Your Email

* Copy [mailer.py](https://github.com/CMP-Studio/WeAreNature/blob/master/_HelpfulThings/mailer.py) into your home directory and edit it with your email address, subject line, etc... 
* Automate taking and sending a screenshot (daily at 7am and 10pm) by adding this to your crontab:

```0 7,10 * * * "/usr/sbin/screencapture" -f $HOME/email.jpg && sleep 5 && python $HOME/mailer.py```

### See This Guide For More Tips
[https://github.com/laserpilot/Installation_Up_4evr](https://github.com/laserpilot/Installation_Up_4evr)

<br/>
<br/>
<br/>

