import { combineReducers } from 'redux'
import messagesReducer from './MessagesReducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  messages: messagesReducer,
  routing: routerReducer
})

export default rootReducer