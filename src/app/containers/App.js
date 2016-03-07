import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as Actions from '../actions/index'
import './App.css'

function mapStateToProps(state) {
  return {
    stacks: state.stacks,
    potentialBit: state.potentialBit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="fadein backgroundOverlay" />
        <ul id="background">
          <li className="fadein backgroundImage" />
        </ul>

        <MainSection {...this.props} />
      </div>
    )
  }
}

App.propTypes = {
  stacks: PropTypes.array.isRequired,
  potentialBit: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
