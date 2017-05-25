#include "ofApp.h"
#include "FutureAction.h"
#include "Category.h"
    
//--------------------------------------------------------------
void ofApp::setup(){
  ofBackground(255);
  ofSetCircleResolution(200);
  
  poll->categories = categories;
  poll->votes = &votes;
  
  // Initialize votes
  for (const auto& category : categories ) { votes[category.first] = 0; }
}

//--------------------------------------------------------------
void ofApp::update(){
  if (poll != nullptr) {
    // ofLog(OF_LOG_NOTICE, "the number is %d", poll->number);
    // poll->number++;
  }
}

//--------------------------------------------------------------
void ofApp::draw(){
    if (view == SCENE) {
      drawScene();
    }
    // ofSetColor(gui->color);
    // ofDrawCircle(ofGetWidth()*0.5,ofGetWidth()*0.5,gui->radius);
    ofSetColor(0);
    ofDrawBitmapString(ofGetFrameRate(),20,20);
}

//--------------------------------------------------------------
void ofApp::drawScene(){
  
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
  votes["water"]++;
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
