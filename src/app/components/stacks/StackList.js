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
      <main className="bitFormModal changeCurrentStack group">
        <div className="buttonClose" onClick={toggleModal}>×</div>

        <section className="bodyWrapper">
          <h3 className="changeCurrentStackTitle">Your stacks:</h3>

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
