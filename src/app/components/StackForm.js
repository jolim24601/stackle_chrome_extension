import React, { Component, PropTypes } from 'react'

export default class StackForm extends Component {
  render() {
    return (
      <div>
        <input
          className="stack-title-input"
          type="text"
          placeholder="Add a title"
          />

        <div className="toggle-privacy">
          <h3>Share this stack or keep it secret?</h3>
          <button className="privacy-btn btn-off">Public</button>
          <button className="privacy-btn btn-on">Private</button>
        </div>
      </div>
    )
  }
}

StackForm.propTypes = {

}
