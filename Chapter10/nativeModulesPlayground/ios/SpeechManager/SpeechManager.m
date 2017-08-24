// SpeechManager.m
 
 #import "SpeechManager.h"
 
 
 @implementation SpeechManager;
 
 // To export a module named SpeechManager
 
 RCT_EXPORT_MODULE();
 
 RCT_EXPORT_METHOD(talk:(NSString *)text)
 {
   NSString *voiceLanguage = @"en-US";
   AVSpeechUtterance *utterance = [[AVSpeechUtterance alloc]      
   initWithString:text];
   utterance.voice = [AVSpeechSynthesisVoice     
   voiceWithLanguage:voiceLanguage];
   utterance.rate = 0.4;
   self.manager = [[AVSpeechSynthesizer alloc] init];
   self.manager.delegate = self;
   [self.manager speakUtterance:utterance];
 }
 
 @end