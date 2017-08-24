import { StackNavigator, TabNavigator } from 'react-navigation';
import { Activity, Home, SplashScreen, Subscriptions, Trending, Video, Library, VideoList, Search } from '../screens';

const getStackNavigatorForScreen = (Screen) => StackNavigator({
  main: { screen: Screen },
  search: { screen: Search },
  videoList: { screen: VideoList }
})


const MainNavigator = TabNavigator({
  home: { screen: getStackNavigatorForScreen(Home) },
  trending: { screen: getStackNavigatorForScreen(Trending) },
  subscriptions: { screen: getStackNavigatorForScreen(Subscriptions) },
  activity: { screen: getStackNavigatorForScreen(Activity) },
  library: { screen: getStackNavigatorForScreen(Library) }
}, {
    swipeEnabled: false,
    animationEnabled: false
})

const routes = {
  splash: { screen: SplashScreen },
  mainFlow: { screen: MainNavigator }
}

export default routes;
