package com.vnovick.textToSpeech;

/**
 * Created by vladimirnovick on 13/08/2017.
 */
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ViewManager;
import android.speech.tts.TextToSpeech;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


import java.util.Locale;
import java.util.Map;


public class TextToSpeechManager extends ReactContextBaseJavaModule {

    TextToSpeech textToSpeechManager;

    public TextToSpeechManager(ReactApplicationContext reactContext){
        super(reactContext);
        textToSpeechManager = new android.speech.tts.TextToSpeech(getReactApplicationContext(), new android.speech.tts.TextToSpeech.OnInitListener() {

            @Override
            public void onInit(int status){
                if (status != android.speech.tts.TextToSpeech.ERROR) {
                    textToSpeechManager.setLanguage(Locale.US);
                }
            }
        });
    }

    @Override
    public String getName(){
        return "TextToSpeechManager";
    }

    @ReactMethod
    public void translate(String message) {
        textToSpeechManager.speak(message, android.speech.tts.TextToSpeech.QUEUE_FLUSH, null);
    }

}
