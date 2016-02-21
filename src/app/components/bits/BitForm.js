import React, { Component, PropTypes } from 'react'

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

   handleChange(e) {
     this.setState({ content: e.target.value })
   }

   handleBlur(e) {
     if (this.props.editing) {
       this.props.onSave(e.target.value)
     }
   }

   render() {
     const contentField = (
       <textarea
         className="bit-form"
         type="text"
         placeholder="Start typing..."
         autoFocus="true"
         value={this.state.content}
         onBlur={this.handleBlur.bind(this)}
         onChange={this.handleChange.bind(this)}
         />
     )

     let wrapper
     if (this.props.editing) {
       wrapper = <div>{contentField}</div>
     } else {
       wrapper = (
         <div>
           <div>In Stack X</div>
           {contentField}
           <button onClick={this.handleClick.bind(this)}>Create Bit</button>
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
