import blacklist from 'blacklist'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)

    this.state =  {
      text: this.props.text
    }
  }

  componentDidMount() {
    var dom = ReactDOM.findDOMNode(this);

    this.medium = new MediumEditor(dom, this.props.options)
    this.medium.subscribe('editableInput', function (e) {
      this._updated = true;
      this.change(dom.innerHTML);
    }.bind(this));

    document.querySelector('.editor').focus()
  }

  componentWillUnmount() {
    this.medium.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.text !== this.state.text && !this._updated) {
      this.setState({text: nextProps.text});
    }

    if(this._updated) this._updated = false;
  }

  render() {
    const tag = this.props.tag;
    const props = blacklist(this.props, 'tag', 'contentEditable', 'dangerouslySetInnerHTML')

    let canEdit;
    if (this.props.editOverride) {
      canEdit = false;
    } else {
      canEdit = true;
    }

    Object.assign(props, {
      contentEditable: canEdit,
      dangerouslySetInnerHTML: {__html: this.state.text}
    })

    return React.createElement(tag, props)
  }

  change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium)
  }
}

Editor.defaultProps = { tag: 'div' }
