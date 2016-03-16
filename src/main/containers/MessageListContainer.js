import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MessageList } from '../components'
import { MessagesReducer } from '../reducers'
import { sendMessage } from '../actions'




const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSendMessage: sendMessage
  }, dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);

