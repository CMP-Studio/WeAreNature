#include "ofMain.h"
#include "ofApp.h"
#include "PollScreen.h"
#include "ofAppGLFWWindow.h"

//========================================================================
int main( ){
  ofGLFWWindowSettings settings;
  
  settings.width = 600;
  settings.height = 600;
  settings.setPosition(ofVec2f(300,0));
  settings.resizable = true;
  shared_ptr<ofAppBaseWindow> mainWindow = ofCreateWindow(settings);
  
  settings.width = 300;
  settings.height = 300;
  settings.setPosition(ofVec2f(0,0));
  settings.resizable = false;
  shared_ptr<ofAppBaseWindow> pollWindow = ofCreateWindow(settings);
  
  shared_ptr<ofApp> mainApp(new ofApp);
  shared_ptr<PollScreen> pollScreen(new PollScreen);
  mainApp->poll = pollScreen;
  
  ofRunApp(pollWindow, pollScreen);
  ofRunApp(mainWindow, mainApp);
  ofRunMainLoop();
}
