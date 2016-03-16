import React, { Component, PropTypes } from 'react'
import GlobalNavbar from '../components/GlobalNavbar'
import MessageListContainer from '../containers/MessageListContainer'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
        <div>
          <GlobalNavbar></GlobalNavbar>
          <MessageListContainer/>
        </div>
    )
  }
}

export default Home
