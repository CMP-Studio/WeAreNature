#pragma once

#include "ofMain.h"
#include "Category.h"

class PollScreen : public ofBaseApp{
  
public:
  map<string, Category> categories;
  map<string, int> *votes;
  
  void setup();
  void update();
  void draw();
};
