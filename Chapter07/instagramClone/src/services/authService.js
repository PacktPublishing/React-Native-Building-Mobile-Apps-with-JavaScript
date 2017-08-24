import React from 'react';
import SplashScreen from '../components/SplashScreen';
import { NavigationActions } from 'react-navigation'


class AuthService {

  _isAuthenticated = false

  set isAuthenticated(bool){
    this._isAuthenticated = bool;
  }

  get isAuthenticated(){
    return this._isAuthenticated
  }

  checkAuth(){
    return new Promise(resolve => setTimeout(() => resolve(this.isAuthenticated), 1000))
  }
}

const authService = new AuthService(false);

export const authDecorator = (Component) => {
  return class AuthChecker extends React.Component {

    state = {
      auth: false
    }

    componentDidMount(){
      authService.checkAuth().then(isAuthenticated => {
        if (isAuthenticated) {
          this.setState({ auth: true })
        } else {
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'login' })
              ]
            })
          );
        }
      });
    }

    render() {
      return this.state.auth ? <Component/> : <SplashScreen />
    }
  }
}


export default authService;
