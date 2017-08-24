import { TabNavigator } from "react-navigation";
import routesConfig from "../config/routes";


export const AppNavigator = TabNavigator(routesConfig, {
  navigationOptions: {
    tabBarVisible: false
  }
});
