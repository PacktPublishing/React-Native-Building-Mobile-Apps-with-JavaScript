import React from "react";
import { TabNavigator } from "react-navigation";
import routesConfig from "./src/config/routes";

const AppNavigator = TabNavigator(routesConfig, {
  navigationOptions: {
    tabBarVisible: false
  }
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
