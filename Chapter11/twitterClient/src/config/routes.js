import React from 'react';
import { View, Text, Button } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  NavigationActions
} from "react-navigation";
import {
  Discover,
  Hashtag,
  Home,
  Login,
  TabScreen,
  Notifications,
  Profile,
  Splash,
  WebBrowser,
  Tweet
} from "../screens";


const MainScreenNavigator = (Component,tabIcon) =>
  StackNavigator({
    main: { screen: TabScreen(Component, tabIcon)},
    hashtag: { screen: TabScreen(Hashtag, tabIcon) },
    tweet: { screen: TabScreen(Tweet, tabIcon) },
    profile: { screen: TabScreen(Profile, tabIcon) },
    web: { screen: WebBrowser }
  });



const routes = {
  splash: { screen: Splash },
  login: { screen: Login },
  mainFlow: {
    screen: TabNavigator({
      home: { screen: MainScreenNavigator(Home, 'home') },
      discover: { screen: MainScreenNavigator(Discover, 'search') },
      notifications: { screen: MainScreenNavigator(Notifications, 'bell-o') }
    }, {
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
          showLabel: false,
          activeTintColor: '#1DA1F3',
          inactiveTintColor: 'gray'
        }
      })
  }
};

export default routes;
