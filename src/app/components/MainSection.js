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
    const { bits, potentialBit, actions } = this.props
    let form
    if (potentialBit.content && potentialBit.content.length > 0) {
      form = (
        <div>
          <BitForm content={potentialBit.content} onSave={this.handleSave.bind(this)} />
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
          <h1 id="greetings">Good day, John</h1>
        </div>
        
        {form}

        <BitList bits={bits} actions={actions} />
      </section>
    )
  }
}

MainSection.propTypes = {
  bits: PropTypes.array.isRequired,
  potentialBit: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
