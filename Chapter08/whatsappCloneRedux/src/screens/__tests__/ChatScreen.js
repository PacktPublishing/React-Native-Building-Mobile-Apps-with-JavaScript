import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ChatScreen from '../ChatScreen';
import { getMockDataSpy } from '../../services/api';
import { shallow } from 'enzyme';




it('renders correctly', () => {
  const tree = renderer.create(
    <ChatScreen />
  );
  expect(tree).toMatchSnapshot();
});


it('fetches data when component is rendered', () =>{
  jest.mock('../../services/api')
  const chatScreen = shallow(
    <ChatScreen />
  )
  expect(getMockDataSpy).toBeCalled();
})
