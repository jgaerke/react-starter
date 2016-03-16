import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const reducer = rootReducer;
const initialState = {};
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const middleware = applyMiddleware(thunk);
const enhancer = compose(middleware, devTools);
const store = createStore(reducer,initialState,enhancer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = rootReducer;
    store.replaceReducer(nextReducer);
  });
}

export default store;