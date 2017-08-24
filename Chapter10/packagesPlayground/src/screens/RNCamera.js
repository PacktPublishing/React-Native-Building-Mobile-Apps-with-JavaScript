import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'react-native-fetch-blob';


export default class RNCamera extends Component {

    state = {
        imageUri: false
    }

    getCameraOrImage() {
        return this.state.imageUri ?
            <Image style={styles.image} source={{ uri: this.state.imageUri }} />:
            <Camera ref={(cam) => { this.camera = cam; }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Icon size={50} style={styles.capture} onPress={this.takePicture.bind(this)} name="camera" />
            </Camera>
        
    }

    render() {
        return (
            <View style={styles.container}>
                { this.getCameraOrImage() }
            </View>
        );
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                RNFetchBlob.fs.readFile(data.mediaUri, 'base64').then(data => {
                    let base64Image = `data:image/jpeg;base64,${data}`;
                    this.setState({
                        imageUri: base64Image
                    })
                })
            })
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    preview: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: 'transparent',
        borderRadius: 5,
        color: '#fff',
        padding: 10,
        margin: 40
    },
    image: {
        width: '100%',
        height: '100%'
    }
});