import React, { Component, PropTypes } from 'react'
import StackList from './StackList'

export default class FormHeader extends Component {
  constructor(props, context) {
    super(props, context)
    // defaults to first stack
    this.state = {
      modalIsOpen: false
    }
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    const { selectedStack, stacks, editBit } = this.props

    let modal
    if (this.state.modalIsOpen) {
      modal = <StackList
        stacks={stacks}
        handleChange={editBit}
        toggleModal={this.toggleModal.bind(this)}
        />
    }

    return (
      <div className="select-stack group">

        <div className="stack--list--left">
          <span className="select-stack-in">In</span>
          <span
            className="select-stack-title"
            onClick={this.toggleModal.bind(this)}>
            {selectedStack.title}
          </span>
        </div>

        <div className="stack--list--right">
          <span>{selectedStack.privacy ? 'Lock' : ''}</span>
        </div>

        {modal}
      </div>
    )
  }
}

FormHeader.propTypes = {
  stacks: PropTypes.array.isRequired,
  selectedStack: PropTypes.object.isRequired,
  editBit: PropTypes.func.isRequired
}
