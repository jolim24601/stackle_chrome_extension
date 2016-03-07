import React, { Component, PropTypes } from 'react'
import FormHeader from '../stacks/FormHeader'
import StackList from '../stacks/StackList'
import Editor from './Editor'
import SuperAgent from 'superagent'
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
    if (text.startsWith('http')) { text = <Embedly url={text} /> }
    this.setState({ content: text })
  }

  handleStack(selectedStack) {
    this.setState({
      stackIds: [selectedStack.id],
      selectedStack,
      privacy: selectedStack.privacy
    })
  }

  componentDidMount() {
    // test
    this.getCard()
  }

  focus() {
    document.querySelector('.editor').focus()
  }

  getCard() {
    // some examples
    const video = 'https://www.youtube.com/watch?v=xkd0hAHxSm0'
    const article = 'http://www.nytimes.com/2016/03/07/us/politics/democratic-debate.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news'
    const image = 'https://instagram.com/p/89CUyVoVY9/'
    const tweetPic = 'https://twitter.com/billclinton/status/706191047240585217'
    const tweetNoPic = 'https://twitter.com/BernieSanders/status/706673186277089280'
    const liveStream = 'http://www.twitch.tv/summit1g'
    // const audio = 'https://soundcloud.com/travisscott-2/wonderful-ftthe-weeknd'

    const url = video

    const key = '3d7cc1df382249b09efacdd6caad0b1f'
    const form = this

    SuperAgent
      .get(`http://api.embed.ly/1/oembed?url=${url}&key=${key}`)
      .query({ maxwidth: 500, scheme: 'http' })
      .end((err, res) => {
          if (err) {
            console.log(err)
            return
          }

          const text = JSON.parse(res.text)
          console.log(text)

          let html

          // we are checking for type but it might make sense to check for provider too
          // providers like twitter can send back tweets of different types (e.g. link, pic...)
          switch (text.type) {
            case 'link':
              html = `<a href=${text.url} target="_blank">`
                      + `<img src=${text.thumbnail_url} />`
                      + `<strong>${text.title}</strong>`
                      + '<br/>'
                      + `<em>${text.description.substr(0, 100)}...</em>`
                      + text.provider_url
                      + '</a>'
              break
            case 'video':
              html = text.html
              break
            case 'photo':
              html = `<img src=${text.url} />`
              break
            case 'rich':
              // might want to use Player.js here
              break
            default:
          }

          form.setState({ content: form.state.content + html })
        }
      )
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

        <div
          onClick={this.focus.bind(this)}
          className="fadein bitForm"
          >
          <FormHeader
             selectedStack={selectedStack}
             stacks={stacks}
             toggleModal={this.toggleModal.bind(this)}
             />

           <Editor
             text={this.state.content}
             onChange={this.handleChange.bind(this)}
             onKeyDown={this.handleSubmit.bind(this)}
             className="editor"
             options={{
               toolbar: {buttons: ['h3', 'anchor']},
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
