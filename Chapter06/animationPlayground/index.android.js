/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
// import App from './src/layoutAnimation';
// import App from './src/layoutAnimationAdvanced';
// import App from './src/animated';
// import App from './src/animatedInterpolated';
// import App from './src/animatedExtrapolated';
import App from './src/animatedComplex';

import { AppRegistry } from 'react-native';
import { UIManager } from 'react-native'
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('animationPlayground', () => App);
