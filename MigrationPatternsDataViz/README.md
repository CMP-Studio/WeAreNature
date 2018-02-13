# Migration Patterns Data Visualization

Are birds migrating sooner due to global warming? According to data collected at Powdermill Nature Reserve, the answer is yes. This playful visualization features over 6000 frames of animation, showing how birds migrate, mate, and raise their young. Visitors can scrub through a year at Powdermill using a spinning knob. They can also switch between data sets to compare the birds behavior 50 years ago and now.

The application was built with [openFrameworks](http://openframeworks.cc/) and [Arduino](https://www.arduino.cc/).
The final installation includes some rarer hardware, but there will be instructions on simulating a turning knob below.

## Running on Mac

* Launch [application](https://github.com/CMP-Studio/WeAreNature/tree/master/MigrationPatternsDataViz/bin). If the application is quitting immediately, you should rebuild with ```installMode = false```.
* The spinning knob and buttons can be simulated with the keyboard:
  * **```q```** to spin through the year backwards 
  * **```w```** to spin forwards
  * **```v```** to jump to 1960s data set 
  * **```b```** to jump to 2010s 
* Press **```Enter```** for Debug Mode

## Building

* Install [openFrameworks](http://openframeworks.cc/) and its dependecies
* Make sure these addons are on the openFrameworks 'addons' folder
  * [ofxBezierWarpManager](https://github.com/sticknor/ofxBezierWarpManager)
  * ofxGui
  * ofxXmlSettings
  * ofxCsv
* Put WeAreNature repo into the openFrameworks 'apps' folder
* Go to WeAreNature/MigrationPatternsDataViz
* Open the .xcodeproj file
* If hardware is not setup, set ```installMode = false``` in [MigrationPatternsDataViz/src/ofApp.h](https://github.com/CMP-Studio/WeAreNature/blob/master/MigrationPatternsDataViz/src/ofApp.h)
* If hardware is set up, set ```installMode = true``` and you will probably need to adjust [this line](https://github.com/CMP-Studio/WeAreNature/blob/40b499926da073acfb5614e0a13df14d7d59d99c/MigrationPatternsDataViz/src/ofApp.cpp#L37) to the correct port
* Pressing the Run button will rebuild the app

## Hardware

### Components
* Encoder
* Gain Amplifier
* Aruduino Uno 
* Two Buttons
* Relay

### Preparing the Arduino
* Install [Adafruit_ADS1X15](https://github.com/adafruit/Adafruit_ADS1X15) Arduino library.
* Upload [NonStandardFirmata](https://github.com/CMP-Studio/WeAreNature/tree/master/MigrationPatternsDataViz/NonStandardFirmata) to the Arduino. This edited Firmata uses the Adafruit_ADS1X15 library to read the encoder value via the gain amplifier. It sends the value to the app with ```sendString```.

### Assembly

Fritzing diagram coming soon....

## Installing As Exhibit (OS X)

### Adjust The Mesh For Short Throw Projection

* Press **```Enter```** for Debug Mode
* With your mouse, you can move the grid around and warp it
* If the grid extends off the the screen, press **```p```** to cycle through the  corner and control points and adjust their position with arrow keys
* Press **```s```** to save

### [& Follow This Installation Guide](https://github.com/CMP-Studio/InstallationComputers)

<br/>
<br/>
<br/>

![Photograph of Migration Patterns Data Viz installated in We Are Nature](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/MigrationDataViz_Wide.jpg)

