import React, { Component, PropTypes } from 'react'
import BitForm from './bits/BitForm'
import NewBit from './buttons/NewBit'
import Time from './widgets/Time'
import './Main.css'
import { httpPost } from '../utils/ApiUtils'

export default class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showBitForm: false
    }
  }

  handleClick() {
    this.setState({ showBitForm: true })
  }

  handleSave() {
    const bit = this.props.potentialBit
    if (bit.content.trim().length !== 0) {
      let formData = new FormData()
      formData.append('bit', bit)

      httpPost({ formData })
    }

    this.handlePotentialBit()
    this.setState({ showBitForm: false })
  }

  handlePotentialBit() {
    // the bit was handled, so get rid of it
    this.props.actions.removeBit()
  }

  render() {
    const { stacks, potentialBit, actions } = this.props
    let form
    if (potentialBit.content && potentialBit.content.length > 0) {
      form = (
        <div>
          <BitForm potentialBit={potentialBit} onSave={this.handleSave.bind(this)} />
        </div>
      )
    } else if (this.state.showBitForm) {
      form = (
        <BitForm onSave={this.handleSave.bind(this)} />
      )
    } else {
      form = (
        <NewBit onClick={this.handleClick.bind(this)} />
      )
    }

    return (
      <section className="fadein main">
        <div className="centerAbove">
          <Time />
          <h1 id="greetings">Good day, Jules</h1>
        </div>

        {form}
      </section>
    )
  }
}

MainSection.propTypes = {
  stacks: PropTypes.array.isRequired,
  potentialBit: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
