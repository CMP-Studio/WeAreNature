//
//  vids.cpp
//  manyVideos
//
//  Created by Caroline Record on 8/22/17.
//
//

#include "Vid.h"

Vid::Vid(
    string name,
    int firstFrame,
    int endFrame,
    vector <string> loopKeys,
    vector <int> loopDelays,
    map<string, ofVideoPlayer>* loopsPtr,
    string stillLoop,
    int soundIndex,
    string soundFlag,
    string year
) {

    name_ = name;
  
    startFrame_ = firstFrame - 1; // Minus one to convert to 0 index
    stillFrame_ = endFrame - 1;
    
    still_.load(frameToFilename(stillFrame_, year));
    
    soundIndex_ = soundIndex;
    soundFlag_ = soundFlag;
    
    loopKeys_ = loopKeys;
    loopDelays_ = loopDelays;
    // grab a pointer to each loop in this vid
    for (int i =0; i< loopKeys.size(); i++) {
        videos.push_back(&(loopsPtr)->find(loopKeys.at(i))->second); // grab a pointer to the right loop
        hasLoops = true;
   }
    
    // If a short loop should be playing when the scene is 'still' (rare case)
    if (stillLoop != "") {
        stillLoop_.load("videos/"+stillLoop);
        stillLoop_.setVolume(0);
        stillLoop_.setLoopState(OF_LOOP_NORMAL);
    }
}


bool Vid::isInRange(int frame) {
    bool nowInRange = (startFrame_ <= frame) && (frame <= stillFrame_);
    if (isInRange_ && !nowInRange) {
        // If it just exited range, stop video block
        stopVideoBlock();
    }
    isInRange_ = nowInRange;
    return isInRange_;
}


int Vid::calculateFrameToShow() {
    if (isPlayingTransition_) {
        if (frameQ_.empty()) {
            isPlayingTransition_ = false;
            isPlayingStill_ = true;
            setupStill();
            setupLooping();
        } else {
            int QFrame = frameQ_.front();
            frameQ_.pop_front();
            return QFrame;
        }
    } else if (isPlayingLoop_) {
        if (hasLoops) {
            updateLooping();
        }
    } else if (isPlayingStill_) {
        if (stillLoop_.isLoaded() && !stillLoop_.isPlaying()){
            stillLoop_.play();
        }
        if (hasLoops && (ofGetElapsedTimeMillis() - startTime_) >= delay_) {
            // no loop is playing but there are loops to play and delay is over
            videos.at(loopIndex_)->setSpeed(1);
            videos.at(loopIndex_)->play();
            delay_ = MAX_DELAY;
            isPlayingLoop_ = true;
            isPlayingStill_ = false;
        }
    }
    return stillFrame_;
}

void Vid::setupTransition(int frame) {
    frameQ_ = {};
    for (int i = frame + 1; i <= stillFrame_; i++) {
        frameQ_.push_back(i);
    }
    isPlayingTransition_ = true;
}

void Vid::setupStill() {
    if (stillLoop_.isLoaded()){
        stillLoop_.play();
    }
}

void Vid::setupLooping() {
    if (hasLoops) {
        loopIndex_ = 0;
        delay_ = loopDelays_.at(loopIndex_);
        startTime_ = ofGetElapsedTimeMillis();
    }
}

void Vid::updateLooping() {
    if (videos.at(loopIndex_)->isPlaying()) { // is playing a loop
        videos.at(loopIndex_)->update();
        if (videos.at(loopIndex_)->getCurrentFrame() < 0) { // Check if video done
            // Once a loop is done playing: rewind it, stop it, set the delay time before playing the next one
            videos.at(loopIndex_)->setFrame(0);
            videos.at(loopIndex_)->stop();
            if ((loopIndex_+ 1) < videos.size()){
                loopIndex_ += 1;
            } else {
                loopIndex_ = 0;
            }
            delay_ = loopDelays_.at(loopIndex_);
            startTime_ = ofGetElapsedTimeMillis();
            isPlayingStill_ = true;
            isPlayingLoop_ = false;
        }
    }
}


void Vid::stopVideoBlock(){
    delay_ = MAX_DELAY;
    if (stillLoop_.isPlaying()){ stillLoop_.stop(); }
    if (isPlayingLoop_ && videos.at(loopIndex_)->isPlaying()) {
        videos.at(loopIndex_)->setFrame(0);
        videos.at(loopIndex_)->stop();
    }
    isPlayingLoop_ = false;
    isPlayingStill_ = false;
    isPlayingTransition_ = false;
}


void Vid::drawVid() {
    if (isPlayingStill_ && stillLoop_.isPlaying()) {
        stillLoop_.update();
        stillLoop_.draw(-185, -69, 2362, 1329);
    } else if (isPlayingLoop_) {
        videos.at(loopIndex_)->draw(-185, -69, 2362, 1329);
    }
}


string Vid::frameToFilename(int frameNumber, string year) {
    string leadingZeros = "";
    if ((frameNumber + 1) < 10) {
        leadingZeros = "000";
    } else if ((frameNumber + 1) < 100) {
        leadingZeros = "00";
    } else if ((frameNumber + 1) < 1000) {
        leadingZeros = "0";
    }
    return "./videos/"+year+"_scrubLevel/"+year+"_" + leadingZeros + ofToString(frameNumber + 1) + ".jpg";
}
