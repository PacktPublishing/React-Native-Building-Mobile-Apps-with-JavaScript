import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { getMockData } from '../api';

it('Api returns mock data correctly', async () => {
   const result = await getMockData();
   expect(result).toMatchSnapshot();
});
