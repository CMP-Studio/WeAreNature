#pragma once

#include "ofMain.h"
#include "ofxSvgLoader.h"
#include "PollScreen.h"
#include "Category.h"
#include "FutureAction.h"

class ofApp : public ofBaseApp{
    
public:
    enum View { SCENE, ACTIONS_LIST, INPUT_EMAIL };
    View view = SCENE;
  
    ofxSvgLoader svg;
  
    shared_ptr<PollScreen> poll;

    const map<string, FutureAction> actions = {
      {"name1", {"title", "litter", FutureAction::ME}},
      {"name2", {"title2", "lkkej", FutureAction::WE}},
      {"name3", {"title3", "askjf", FutureAction::ME}}
    };
  
    const map<string, Category> categories = {
      {"water", {"title1", "nchaow", {"name1","name2"}}},
      {"air", {"title2", "lkkej", {"name1","name3"}}},
      {"plants", {"title3", "askjf", {"name2","name3"}}}
    };
  
    map<string, int> votes;
  
    void setup();
    void update();
    void draw();
    void drawScene();
  
    void keyPressed(int key);
    void keyReleased(int key);
    void mouseMoved(int x, int y );
    void mouseDragged(int x, int y, int button);
    void mousePressed(int x, int y, int button);
    void mouseReleased(int x, int y, int button);
    void mouseEntered(int x, int y);
    void mouseExited(int x, int y);
    void windowResized(int w, int h);
    void dragEvent(ofDragInfo dragInfo);
    void gotMessage(ofMessage msg);
};
