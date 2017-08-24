import React from 'react';
import { View, Button, Alert, NetInfo, Clipboard, CameraRoll, FlatList, Text, Image, AsyncStorage, Share } from 'react-native';
import PlatformSpecific from './platform-specific';

export default class App extends React.Component {

  state = {
    photos: []
  }

  async componentDidMount(){
    const dummyObj = {
      title: 'test',
      id: '1234'
    }
    const dummyObj2 = {
      description: 'this is a test object description'
    }
    let result = await AsyncStorage.setItem('OBJ1234', JSON.stringify(dummyObj));
    result = await AsyncStorage.mergeItem('OBJ1234', JSON.stringify(dummyObj2));
    result = await AsyncStorage.getItem('OBJ1234');
    console.log(result);
    this.watchId = navigator.geolocation.watchPosition(
      (success) => console.log("Success", success),
      (error) => console.log("error", error),
      {
        distanceFilter: 2000000,
        enableHighAccuracy: true }
    );
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log(`App is ${isConnected ? 'connected': 'offline'}`);
    });
  }



  alert(){
    Alert.alert(
      'Here goes Alert title',
      'My first Api test in ApiPlayground',
      [
        {text: 'Continue',
          onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Exit',
          onPress: () =>
            Alert.alert('Are you sure?', '', [
              { text: 'Ok'},
              { text: 'Cancel', style: 'cancel'}]),
            style: 'destructive'
        }
      ],
      { cancelable: true }
    )
  }

  share(){
    Share.share({ message: 'Sharing my awesome api', title: 'Api Playground'})
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  render(){
    return (
      <View>
        <Button title="alert" onPress={this.alert} />
        <Button title="share" onPress={this.share} />
         <Button title="get this text into clipboard" onPress={
          async () =>
            await Clipboard.setString('get this text into clipboard')}/>
        <Button title="paste this text into clipboard" onPress={
          async () => {
            const result = await Clipboard.getString()
            console.log(result);
          }} />
        <Button title="Get photos" onPress={this.getPhotos}/>
          <FlatList
            data={this.state.photos}
            keyExtractor={(item, index) => `photo-${index}`}
            renderItem={({
              item: {
                node: {
                  image: {
                    height,
                    width,
                    uri
                  }
                }
              }
            }) =>
              <Image
                style={{
                  width: width * .1,
                  height: height *.1
                }}
                source={{ uri }}/>
            }
          />
         
        <PlatformSpecific />
      </View>
    )
  }
}
