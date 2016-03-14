import React, { Component, PropTypes } from 'react'
import GlobalNavbar from '../components/GlobalNavbar'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
        <GlobalNavbar></GlobalNavbar>
    )
  }
}

export default Home
