import React, { Component, PropTypes } from 'react'
import BitForm from './bits/BitForm'
import BitList from './bits/BitList'
import NewBit from './buttons/NewBit'
import Time from './widgets/Time'

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
    if (content.length !== 0) {
      this.props.actions.addBit(content)
      this.setState({ showBitForm: false })
    }
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
        <h1 className="greetings-widget">Hello, John</h1>
        <Time />
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
