#include <map>

#include "ofApp.h"
#include "FutureAction.h"
#include "Category.h"

using std::map;

static const map<string, FutureAction> kActions = {
  {"name1", {"title", "litter", FutureAction::me}},
  {"name2", {"title2", "lkkej", FutureAction::we}},
  {"name3", {"title3", "askjf", FutureAction::me}}
};

static const map<string, Category> kCategories = {
  {"water", {"title1", "nchaow", {"name1","name2"}}},
  {"air", {"title2", "lkkej", {"name1","name3"}}},
  {"plants", {"title3", "askjf", {"name2","name3"}}}
};
    
//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(255);
    ofSetCircleResolution(200);
    
}

//--------------------------------------------------------------
void ofApp::update(){
  if (poll != nullptr) {
    ofLog(OF_LOG_NOTICE, "the number is %d", poll->number);
    poll->number++;
  }
}

//--------------------------------------------------------------
void ofApp::draw(){
    // ofSetColor(gui->color);
    // ofDrawCircle(ofGetWidth()*0.5,ofGetWidth()*0.5,gui->radius);
    ofSetColor(0);
    ofDrawBitmapString(ofGetFrameRate(),20,20);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){
    
}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){
    
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
    
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){
    
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 
    
}
