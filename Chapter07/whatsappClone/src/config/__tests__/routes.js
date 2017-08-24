import 'react-native';
import React from 'react';
import routes from '../routes';
import Home from '../../screens/Home';
import ChatScreen from '../../screens/ChatScreen';

it('has all needed routes', () => {
    expect(routes).toMatchSnapshot();
});