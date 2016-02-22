import React, { Component, PropTypes } from 'react'
import './BitForm.css'

export default class BitForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      content: this.props.content || ''
    }
  }

  handleClick() {
    this.props.onSave(this.state.content)
    this.setState({ content: '' })
  }

  handleSubmit(e) {
    // cmd + enter
    if (e.which === 13 && e.metaKey) {
      this.handleClick()
    }
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  handleBlur(e) {
    return;
    if (this.props.editing) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    const bitText = (
      <textarea
        type="text"
        placeholder="Start typing..."
        autoFocus="true"
        value={this.state.content}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
        />
   )

    let wrapper
    if (this.props.editing) {
       wrapper = <div className="editBitForm">{bitText}</div>
     } else {
       wrapper = (
         <div className="bitForm">
           <div className="stackHeader">In Stack X</div>
           {bitText}
           <button
            className="createBit"
            onClick={this.handleClick.bind(this)}>></button>
         </div>
       )
     }

     return (
       <div>
         {wrapper}
       </div>
     )
   }
}

BitForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  content: PropTypes.string,
  editing: PropTypes.bool
}
