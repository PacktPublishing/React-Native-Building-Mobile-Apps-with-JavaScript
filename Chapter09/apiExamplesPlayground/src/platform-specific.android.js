import React from 'react';
import { View, ToastAndroid, Text, Button, DatePickerAndroid, TimePickerAndroid } from 'react-native';

export default class PlatformSpecific extends React.Component {


  async openTimePicker(){
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  async openDatePicker(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render(){
    return (
      <View>
        <Text style={{ fontSize: 32, margin: 20 }}>Android APIs</Text>
        <View>
          <Button title="Show toast" onPress={() => {
            ToastAndroid.show('Toast message for android', ToastAndroid.LONG)
          }} />
          <Button title="Show toast at the top" onPress={() => {
            ToastAndroid.showWithGravity('Toast message for android', ToastAndroid.LONG, ToastAndroid.TOP)
          }} />
          <Button title="open DatePicker" onPress={this.openDatePicker} />
          <Button title="open TimePicker" onPress={this.openTimePicker} />
        </View>
      </View>
    )
  }
}
