import fetch from 'isomorphic-fetch'
import { SEND_MESSAGE } from '../constants/ActionTypes'
import receiveMessage from './ReceiveMessage'

export default (message) => {
  return (dispatch, getState) => {
    dispatch({
      type: SEND_MESSAGE,
      message
    })
    return fetch('http://localhost:8080')
        .then(response => dispatch(receiveMessage(message)))
  }
}