#include "PollScreen.h"

//--------------------------------------------------------------
void PollScreen::setup(){
}

//--------------------------------------------------------------
void PollScreen::update(){
}

//--------------------------------------------------------------
void PollScreen::draw(){
  // Initialize votes
  int i;
  for (const auto& category : categories ) {
    ofDrawBitmapString((*votes)[category.first], (i*100) + 50, 50);
    ofDrawBitmapString(category.first, (i*100) + 50, 20);
    i++;
  }
}
