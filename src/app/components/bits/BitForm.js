import React, { Component, PropTypes } from 'react'
import FormHeader from '../stacks/FormHeader'
import StackList from '../stacks/StackList'
import Editor from './Editor'
import './BitForm.css'

const blankState = {
  selectedStack: null,
  modalIsOpen: false
}

export default class BitForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = Object.assign({}, blankState, this.props.potentialBit)
  }

  handleClick() {
    const bitParams = {
      user_id: this.state.user_id,
      privacy: this.state.privacy,
      content: this.state.content,
      kind: this.state.kind,
      stack_ids: this.state.stackIds
    }

    this.props.onSave(bitParams)
    this.setState({ content: '' })
  }

  handleSubmit(e) {
    // cmd + enter
    if (e.which === 13 && e.metaKey) {
      this.handleClick()
    }
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }

  handleChange(text) {
    this.setState({ content: text })
  }

  handleStack(selectedStack) {
    this.setState({
      stackIds: [selectedStack.id],
      selectedStack,
      privacy: selectedStack.privacy
    })
  }

  focus() {
    document.querySelector('.editor').focus()
  }


  render() {
    const { stacks } = this.props
    const selectedStack = this.state.selectedStack || stacks[0]

    let stackList
    if (this.state.modalIsOpen) {
      stackList = <StackList
        stacks={stacks}
        onEdit={this.handleStack.bind(this)}
        toggleModal={this.toggleModal.bind(this)}
        />
    }

    return (
      <div className="wrapper">
        {stackList}

        <div onClick={this.focus.bind(this)} className="fadein bitForm">
          <FormHeader
             selectedStack={selectedStack}
             stacks={stacks}
             toggleModal={this.toggleModal.bind(this)}
             />

           <Editor
             text={this.state.content}
             onChange={this.handleChange.bind(this)}
             className="editor"
             options={{
               toolbar: {buttons: ['h3']},
               placeholder: {text: 'Add something'}
             }}
             />
         </div>

          <button
            className="createBit"
            onClick={this.handleClick.bind(this)}>></button>
      </div>
    )
   }
}

BitForm.propTypes = {
  stacks: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  potentialBit: PropTypes.object
}
