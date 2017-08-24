import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

export const noAuthRoutes = {
  login: { screen: Login },
  signup: { screen: SignUp }
}

export const authRoutes = {
  home: { screen: Home }
}

export const routes = {
  home: {
    screen: Home
  },
  login: {
    screen: Login
  },
  signup: {
    screen: SignUp
  }
}
