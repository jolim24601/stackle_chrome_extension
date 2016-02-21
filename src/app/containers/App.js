import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as Actions from '../actions/index'

class App extends Component {
  render() {
    const { bits, actions } = this.props
    return (
      <div>
        <div className="background-overlay">
          <img src="https://w-dog.net/wallpapers/9/16/433555943594116/japan-torii-night-sunset-horizon-sea-ocean-calm-sky-blue.jpg" />
        </div>
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
