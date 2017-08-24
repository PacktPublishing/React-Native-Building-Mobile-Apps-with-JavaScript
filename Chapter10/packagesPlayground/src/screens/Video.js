import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default class VideoScreen extends React.Component {
    render(){
        return (
            <Video source={{ uri: "https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" }}   // Can be a URL or a local file.                                   // Store reference
                rate={1.0}                              // 0 is paused, 1 is normal.
                volume={1.0}                            // 0 is muted, 1 is normal.
                muted={false}                           // Mutes the audio entirely.
                paused={false}                          // Pauses playback entirely.
                resizeMode="fill"                      // Fill the whole screen at aspect ratio.*
                repeat={true}                           // Repeat forever.
                playInBackground={false}                // Audio continues to play when app entering background.
                style={styles.backgroundVideo} />
        )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});