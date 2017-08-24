import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';
import { shallow } from 'enzyme';


it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
  );
  expect(tree).toMatchSnapshot();
});

it('navigate on press', () => {
  const navigate = jest.fn();
  const homeScreen = shallow(
    <Home navigation={{ navigate }}/>
  )
  homeScreen.find('Button').props().onPress()
  expect(navigate).toBeCalledWith("chat", {"name": "John"})
})
