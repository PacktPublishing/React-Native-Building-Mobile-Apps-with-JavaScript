import React from 'react';
import PushNotification from 'react-native-push-notification';
import { Text, View, AppState} from 'react-native';

export default class RNPN extends React.Component {


    state = {
        appState: AppState.currentState
    }


    scheduledNotification = {
        number: 0,
        message: "Scheduled Notification",
        date: new Date(Date.now() + 10000)
    }


    componentDidMount(){
        PushNotification.configure({
            // (required) Called when a remote or local notification is opened or received
            onNotification: (notification) => {
                console.log('NOTIFICATION:', notification);
                this.setState({ title: 'Welcome Back' })
            }
        });
        AppState.addEventListener('change', this.changeAppState.bind(this));
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.changeAppState.bind(this));
    }

    changeAppState(nextAppState){
        if (nextAppState === 'background') {
            PushNotification.localNotification({
                number: 0,
                message: "My Notification Message",
                playSound: false
            });
            PushNotification.localNotificationSchedule(this.scheduledNotification)
        }  else {
            PushNotification.cancelAllLocalNotifications();
        }
    }   

    render(){
        return (
            <View>
                <Text>Exit to Home screen and wait for 5 seconds</Text>
            </View>
        )
    }
}