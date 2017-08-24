import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ChatScreen from '../ChatScreen';
import { getMockDataSpy } from '../../services/api';
import { shallow } from 'enzyme';
jest.mock('../../services/api');


it('Chat Screen renders correctly', () => {
    const tree = renderer.create(
        <ChatScreen />
    );
    expect(tree).toMatchSnapshot();
});

it('ChatScreen has proper navigation options', () => {
    expect(
        ChatScreen.navigationOptions({ 
            navigation: { 
                state: { 
                    params: { 
                        name: 'John'
                    }
                }
            }
        }
    )).toMatchSnapshot();
});

it('fetches data when component is rendered', () => {
    const chatScreen = renderer.create(<ChatScreen />);
    expect(getMockDataSpy).toBeCalled();
}) 