import React, { Component, PropTypes } from 'react'
import BitForm from './bits/BitForm'
import BitList from './bits/BitList'
import NewBit from './buttons/NewBit'
import Time from './widgets/Time'
import './Main.css'

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

  handleSave(content) {
    if (content.trim().length !== 0) {
      this.props.actions.addBit(content)
    }

    this.setState({ showBitForm: false })
  }

  render() {
    let form
    if (this.state.showBitForm) {
      form = (
        <BitForm onSave={this.handleSave.bind(this)} />
      )
    } else {
      form = (
        <NewBit onClick={this.handleClick.bind(this)} />
      )
    }

    const { bits, actions } = this.props

    return (
      <section className="main">
        <div className="centerAbove">
          <Time />
          <h1 id="greetings">Good day, John</h1>
        </div>

        {form}

        <BitList actions={actions} bits={bits}/>
      </section>
    )
  }
}

MainSection.propTypes = {
  bits: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
