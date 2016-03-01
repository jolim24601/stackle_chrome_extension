import React, { Component, PropTypes } from 'react'
import StackItem from './StackItem'

export default class StackList extends Component {
  handleClick(stack) {
    this.props.editBit({ })
  }

  render() {
    const { toggleModal, stacks } = this.props

    let stackList = this.props.stacks.map((stack) =>
      <StackItem key={stack.id} stack={stack} handleClick={this.handleClick.bind(this)} />
    )

    return (
      <main className="bit-form-modal change--current--stack group">
        <div className="button--close" onClick={toggleModal}>×</div>

        <section className="body--wrapper">
          <h5 className="change--current--stack--title">Your stacks:</h5>

          <ul>
            {stackList}
          </ul>
        </section>
      </main>
    )
  }
}

StackList.propTypes = {
  stacks: PropTypes.object.isRequired,
  editBit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}
