import React, { Component, PropTypes } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import GlobalNavbar from '../components/GlobalNavbar'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
        <div>
          <GlobalNavbar></GlobalNavbar>
          <Grid>
            <Row className="show-grid">
              <Button>Submit</Button>
            </Row>
          </Grid>
        </div>
    )
  }
}

export default Home
