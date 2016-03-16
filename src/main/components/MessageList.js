import React, { Component, PropTypes } from 'react';
import { ButtonInput, Input, Grid, Row, Col } from 'react-bootstrap'

const propTypes = {
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired
}

class MessageList extends Component {

  getMessageId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  }

  componentDidUpdate() {
    //console.log(this.props)
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col md={8}>
              <ul>
                {
                  this.props.messages.map(
                      (message) => <li key={this.getMessageId()}>{message}</li>)
                }
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  this.props.onSendMessage(this.refs.messageText.refs.input.value)
                }}>
                  <Input
                      type="text"
                      placeholder="Enter message"
                      label="Message:"
                      ref="messageText"
                      groupClassName="group-class"
                      labelClassName="label-class"/>
                  <ButtonInput type="submit" value="Send"/>
                </form>
              </div>
            </Col>
          </Row>
        </Grid>
    )
  }
}

MessageList.propTypes = propTypes;
export default MessageList;

