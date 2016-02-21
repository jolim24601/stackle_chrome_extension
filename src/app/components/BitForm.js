import React, { Component, PropTypes } from 'react'

export default class BitForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      content: this.props.content || ''
    }
  }

  handleSubmit(e) {
     const content = e.target.value.trim()
     if (e.which === 13) {
       this.props.onSave(content)
       if (this.props.newBit) {
         this.setState({ content: '' })
       }
     }
   }

   handleChange(e) {
     this.setState({ content: e.target.value })
   }

   handleBlur(e) {
     if (!this.props.newBit) {
       this.props.onSave(e.target.value)
     }
   }

   render() {
     return (
       <textarea
         className="bit-form"
         type="text"
         placeholder="Start typing..."
         autoFocus="true"
         value={this.state.content}
         onBlur={this.handleBlur.bind(this)}
         onChange={this.handleChange.bind(this)}
         onKeyDown={this.handleSubmit.bind(this)}
         />
     )
   }
}

BitForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  content: PropTypes.string,
  editing: PropTypes.bool,
  newBit: PropTypes.bool
}
