//
//  vids.h
//  manyVideos
//
//  Created by Caroline Record on 8/22/17.
//
//

#include "ofMain.h"

class Vid{
public:
    Vid(
      string name,
      int firstFrame,
      int endFrame,
      vector <string> loopKeys,
      vector <int> loopDelays,
      map<string, ofVideoPlayer>* loopsPtr,
      string stillLoop,
      int soundIndex,
      string soundFlag,
      string years
    );
    
    string name_;
    int soundIndex_ = 0;
    string soundFlag_ = "";
    string debugInfo_;
  
    bool isInRange(int frame);
    int calculateFrameToShow();
    bool isLoopFinished(); // returns true if loop has finished
    void drawVid();
  
    bool isInRange_ = false;
    bool isPlayingTransition_ = false;
    bool isPlayingStill_ = false;
    bool isPlayingLoop_ = false;
    void setupTransition(int frame);
    
    void stopVideoBlock();

private:

    deque<int> frameQ_;
    
    vector <string> loopKeys_;      // Names of videos
    vector <int> loopDelays_;      // Loop delays
    vector <ofVideoPlayer*> videos; // Keeps pointers to the global loop videos
    int loopIndex_ = 0;             // Which loop should be played next
    bool hasLoops = false;
    
    void setupStill();
    void setupLooping();
    void updateLooping();
    
    float startFrame_;
    float stillFrame_;
    
    ofImage still_;
    ofVideoPlayer stillLoop_;

    // manage the block of videos
    void setupVideoBlock(int frame);
    void updateVideoBlock(); // returns if movie is playing
    void drawVideoBlock();
    
    
    string frameToFilename(int frameNumber, string year);
    
    
    int MAX_DELAY = 15000;
    int delay_;
    int startTime_;
};
