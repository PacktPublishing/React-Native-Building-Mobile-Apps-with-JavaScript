import React from 'react';
import { View, Text, Button, ActionSheetIOS, Settings} from 'react-native';

export default class App extends React.Component {

  componentDidMount(){
    Settings.set({ play_sounds_preference: 'NO' })
  }

  render(){
    return (
      <View>
        <Text style={{ fontSize: 32, margin: 20 }}>IOS APIs</Text>
        <View>
          <Button title="Show Action Sheet" onPress={() => {
            ActionSheetIOS.showActionSheetWithOptions({
              options: ['one', 'two', 'three', 'four', 'cancel', 'exit'],
              cancelButtonIndex: 4,
              destructiveButtonIndex: 5,
              title: 'Show case Action sheet',
              message: 'This is a simple action sheet show case'
            }, (args) => console.log(args))
          }} />
        </View>
        <View>
          <Text>{`Sound preferences are: ${Settings.get('play_sounds_preference')}`}</Text>
        </View>
      </View>
    )
  }
}
