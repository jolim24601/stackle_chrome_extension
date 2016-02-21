import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BitForm from '../components/BitForm'
import BitList from '../components/BitList'
import * as BitActions from '../actions/bits'

class App extends Component {
  render() {
    const { bits, actions } = this.props
    return (
      <div>
        <ul id="background">
          <li></li>
        </ul>
        <BitForm newBit onSave={actions.addBit} />
        <BitList
          addBit={actions.addBit}
          deleteBit={actions.deleteBit}
          editBit={actions.editBit}
          bits={bits} />
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
    actions: bindActionCreators(BitActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
