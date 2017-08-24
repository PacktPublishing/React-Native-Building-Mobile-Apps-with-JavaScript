import { actionTypes } from '../actions';

const initialState = {
  messages: []
}

export default function messagesReducer(state = initialState, action){
  switch (action.type) {
    case actionTypes.UPDATE_MESSAGES:
      return action.payload
    case actionTypes.UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE:
      return {
        messages: state.messages
      }
    default:
      return state;
  }
}

export const getMessagesSelector = (state) => state.messages
