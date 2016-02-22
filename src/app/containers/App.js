import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as Actions from '../actions/index'
import './App.css';

class App extends Component {
  render() {
    const { bits, actions } = this.props
    return (
      <div>
        <div className="fadein backgroundOverlay" />
        <ul id="background">
          <li className="fadein backgroundImage" />
        </ul>
        <MainSection bits={bits} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  bits: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    bits: state.bits
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
