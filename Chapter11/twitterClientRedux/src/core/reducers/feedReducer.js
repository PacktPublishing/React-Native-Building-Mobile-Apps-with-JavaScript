import { actionTypes } from '../actions';

const initialState = {
    data: []
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FEED_DATA_SUCCESS:
        return { ...state, ...action.payload }
    default:
      return state;
  }
}
