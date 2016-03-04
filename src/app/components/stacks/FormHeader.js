import React, { Component, PropTypes } from 'react'
import './FormHeader.css'

export default class FormHeader extends Component {
  render() {
    const { selectedStack, stacks, toggleModal } = this.props

    return (
      <header className="metabar metabarModal group">
        <div className="bodyWrapper">
          <div className="selectStack group">

            <div className="stackListLeft">
              <span className="selectStackIn">In </span>
              <span
                className="selectStackTitle"
                onClick={toggleModal}>

                  {selectedStack.title}
              </span>
            </div>

            <div className="stackListRight">
              <span
                className="mainBtn"
                onClick={toggleModal}>
                  Change stack
              </span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

FormHeader.propTypes = {
  stacks: PropTypes.array.isRequired,
  selectedStack: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired
}
