import { RECEIVE_MESSAGE } from '../constants/ActionTypes'

export default (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
}