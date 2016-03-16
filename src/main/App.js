import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { store } from './stores'
import { Home } from './views';
import './styles/application.less'

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
          <Route path="/" component={Home}>
            <IndexRoute component={Home}/>
          </Route>
        </Router>
      </div>
    </Provider>,
    document.getElementById('app')
)

