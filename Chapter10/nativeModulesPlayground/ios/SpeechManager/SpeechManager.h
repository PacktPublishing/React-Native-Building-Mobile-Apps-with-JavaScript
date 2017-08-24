// SpeechManager.h
 #import <React/RCTBridgeModule.h>
 
 @import AVFoundation;
 
 
 @interface SpeechManager : NSObject <RCTBridgeModule>
 @property (nonatomic, strong) AVSpeechSynthesizer *manager;
 @end