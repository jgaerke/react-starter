import { SEND_MESSAGE } from '../constants/ActionTypes'

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
  case SEND_MESSAGE:
      var result = [
        action.message,
        ...state
      ];
      console.log(result);
    return result;
  default:
    return state
  }
}