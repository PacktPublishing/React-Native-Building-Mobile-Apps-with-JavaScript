import { AppNavigator } from '../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("splash")
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};


export default navReducer;