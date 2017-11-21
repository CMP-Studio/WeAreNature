#pragma once

#include "ofMain.h"
#include "ofxGui.h"
#include "ofxBezierWarpManager.h"
#include "Vid.h"
#include "ofxTurboJpeg.h"


class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

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
    
        int camW, camH;
        int vidWidth = 1920;
        int vidHeight = 1080;
    
        string debugInfo;
    
        // load in the schedule
        ofXml scheduleOfVideos;
    
        string mons[12] = {
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        };
    
        string handleNames[12] = {
            "topright anchor",
            "topright-v",
            "topright-h",
            "topleft anchor",
            "topleft-h",
            "topleft-v",
            "bottomleft anchor",
            "bottomleft-v",
            "bottomleft-h",
            "bottomright anchor",
            "bottomright-h",
            "bottomright-v"
        };
    
        int posMod(int x, int y);
    
        void spinnerChanged(const int newSpinnerNumber);
    
        int spinnerNumber;
        int prevSpinnerNumber;
        int fakeSpinnerNumber;

        int getSpinDistance(int prev, int next, int max);
        int spinDistance;
        deque<int> spinDistanceList;
        float averageSpinDistance;

        int scrubLevelFrame;
        int loopLevelFrame;
        int frameShown;
    
        int handleIndex = 0;
    
        void calculateFrameToShow();
    
        vector<Vid> vids_1960;
        vector<string> images_1960;
        vector<ofImage> temp_images_1960;
    
        vector<Vid> vids_2010;
        vector<string> images_2010;

        vector<ofImage> temp_images_2010;

        std::map<string, ofVideoPlayer> loops;
    

        vector<Vid>* activeVids;
        vector<string>* activeImages;
        int activeVidIndex = -1;
    
        void setTo1960s();
        void setTo2010s();
    
        string years;
    
        // transistion bw years overlay
        int startTime;
        bool isTransitioning;
        bool isMidTrans;
        ofSoundPlayer transSound;
        bool isCurrently1960;
    
        bool showDecorativeFrame = false;
        ofImage decorativeFrame; // The branches graphic
    
        ofFbo vidBuffer;
        
        // === Arduino =============================
    
        ofArduino ard;
        bool bSetupArduino;
        void setupArduino(const int & version);
        void analogPinChanged(int analogVal);
        void digitalPinChanged(const int & pinNum);
        void updateArduino();
    
        bool buttonOneState;
        bool buttonTwoState;
    
    
        // === Sounds  =============================

        ofSoundPlayer spring; // 0
        ofSoundPlayer spring2; // 5 (sorry added last)
        ofSoundPlayer summer1; // 1
        ofSoundPlayer summer2; // 2
        ofSoundPlayer fall; // 3
        ofSoundPlayer winter; // 4
    
        float volumes[6] = {0, 0, 0, 0, 0, 0};
    
        ofSoundPlayer JUNCO;
        ofSoundPlayer WT;
        bool soundTriggered;
    
        void updateAudio();

        bool isScrubSoundFadeUp;
        bool isScrubSoundFadeDown;
        int startSoundFade;
        int fadeTime;
    
        int trigWT_sound_1960;
        int trigJUNCO_sound_1960;
    
        int trigWT_sound_2010;
        int trigJUNCO_sound_2010;
    
        int trigWT_sound;
        int trigJUNCO_sound;

    
        // === Is Spinning?  =============================
    
        bool isSpinMode;

        string encoderVal;
    
        deque<int> diffList;

    
        //helper
        float averageOfList(deque<int> list);
        bool checkInRange(int value, int centerOfRange);

        // === Debugging =============================
    
        ofxPanel gui;
        ofxIntSlider minimumEncoderMovement;
        ofxFloatSlider spinModeThreshold;
    
        ofFbo checkerboardTex;
        bool debugMode = false;
        ofxBezierWarpManager bezManager;

        ofxTurboJpeg turbo;
        ofImage frameImage;
    
        // check if the buttona are connecting successfully
        int startButtonWaitTime;
        bool isButtonConnect;
};
