import React from 'react';
import ImagePicker from 'react-native-image-picker';
import { View, Image, StyleSheet, Button } from 'react-native';

// More info on all the options is below in the README...just some common use cases shown here
const options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};



export default class ImagePickerView extends React.Component {
    state = {
        avatarSource: false
    }

    pickImage(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render(){
        return (
            <View style={{ flex: 1}}>
                { this.state.avatarSource && <Image style={styles.image} source={this.state.avatarSource} /> }
                <Button onPress={() => this.pickImage()} title="Pick image"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%'
    }
})