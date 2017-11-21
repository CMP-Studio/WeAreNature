## <a name="futureaction"></a>Future Action




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
