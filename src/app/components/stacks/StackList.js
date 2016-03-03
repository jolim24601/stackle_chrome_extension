import React, { Component, PropTypes } from 'react'
import StackItem from './StackItem'
import './StackList.css'

export default class StackList extends Component {
  editSelectedStack(selectedStack) {
    this.props.onEdit(selectedStack)
    this.props.toggleModal()
  }

  render() {
    const { toggleModal, stacks } = this.props

    const stackList = stacks.map((stack) =>
      <StackItem
        key={stack.id}
        stack={stack}
        editSelectedStack={this.editSelectedStack.bind(this)}
        />
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
  stacks: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}
