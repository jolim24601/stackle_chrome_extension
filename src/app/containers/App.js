import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as Actions from '../actions/index'
import SuperAgent from 'superagent'
import './App.css'

// pic of the day
const potdUrl = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'
const potdBaseUrl = 'http://www.bing.com'

function mapStateToProps(state) {
  return {
    stacks: state.stacks,
    potentialBit: state.potentialBit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

class App extends Component {
  fetchBackgroundImage() {
    const app = this

    SuperAgent
      .get(potdUrl)
      .end((err, res) => {
        if (err) {
          console.log(error)
          return
        }

        const parsedResponse = JSON.parse(res.text)
        const image = parsedResponse.images[0]

        app.setState({ backgroundUrl: `${potdBaseUrl}${image.url}` })
      })
  }

  componentWillMount() {
    this.fetchBackgroundImage()
  }

  render() {
    // may want to include a default background image in assets as an alternate
    const backgroundImage = {
      backgroundImage: this.state ? `url(${this.state.backgroundUrl})` : ''
    }

    return (
      <div>
        <div className="fadein backgroundOverlay" />
        <ul id="background">
          <li style={backgroundImage} className="fadein backgroundImage" />
        </ul>

        <MainSection {...this.props} />
      </div>
    )
  }
}

App.propTypes = {
  stacks: PropTypes.array.isRequired,
  potentialBit: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
