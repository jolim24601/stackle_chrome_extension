import React, { Component, PropTypes } from 'react'
import BitForm from './bits/BitForm'
import NewBit from './buttons/NewBit'
import Time from './widgets/Time'
import './Main.css'
import { httpPost } from '../utils/ApiUtils'

export default class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = { showBitForm: false }
  }

  handleClick() {
    this.setState({ showBitForm: true })
  }

  handleSave(bit) {
    if (bit.content.trim().length !== 0) {
      httpPost(bit)
    }

    // remove it
    this.handlePotentialBit()
  }

  handlePotentialBit() {
    this.props.actions.removeBit()
    this.setState({ showBitForm: false })
  }

  render() {
    const { stacks, potentialBit, actions } = this.props

    let form, widgets
    if (!potentialBit.content
        && !potentialBit.content.length > 0
        && !this.state.showBitForm) {
          form = (
            <NewBit onClick={this.handleClick.bind(this)} />
          )

          widgets = (
            <div className="centerAbove">
              <Time />
              <h1 id="greetings">Good day, Jules</h1>
            </div>
          )
    } else {
      form = (
        <BitForm
          stacks={stacks}
          potentialBit={potentialBit}
          onSave={this.handleSave.bind(this)}
          />
      )
    }

    return (
      <section className="fadein main">
        {widgets}

        {form}
      </section>
    )
  }
}

MainSection.propTypes = {
  user: PropTypes.object,
  stacks: PropTypes.array.isRequired,
  potentialBit: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
