import { actionTypes } from '../actions';

const initialState = {
    userData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_DATA_SUCEESS:
      return { ...state, isLoggedIn: true, userData: action.payload.user }
    default:
      return state;
  }
}
