var blacklist = require('blacklist');
var React = require('react');
var ReactDOM = require('react-dom');

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

// this was created by: https://github.com/wangzuo/react-medium-editor

if(typeof document !== 'undefined') {
  var MediumEditor = require('medium-editor');
}

module.exports = React.createClass({
  displayName: 'MediumEditor',

  getInitialState: function () {
    return {
      text: this.props.text
    };
  },

  getDefaultProps: function () {
    return {
      tag: 'div'
    };
  },

  componentDidMount: function () {
    var dom = ReactDOM.findDOMNode(this);

    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', function (e) {
      this._updated = true;
      this.change(dom.innerHTML);
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.medium.destroy();
  },

  componentWillReceiveProps: function (nextProps) {
    if(nextProps.text !== this.state.text && !this._updated) {
      this.setState({text: nextProps.text});
    }

    if(this._updated) this._updated = false;
  },

  render: function () {
    var tag = this.props.tag;
    var props = blacklist(this.props, 'tag', 'contentEditable', 'dangerouslySetInnerHTML');

    // this is used to make the editor editable or not. See BitView for more details
    var canEdit;
    if (this.props.editOverride) {
      canEdit = false;
    } else {
      canEdit = true;
    }

    Object.assign(props, {
      contentEditable: canEdit,
      dangerouslySetInnerHTML: {__html: this.state.text}
    });

    return React.createElement(tag, props);
  },

  change: function (text) {
    if(this.props.onChange) this.props.onChange(text, this.medium);
  }
});
