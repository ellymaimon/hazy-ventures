import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Dialogue } from './Dialogue';
import LandingPage from './LandingPage';
import Game from './Game';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      bar: 0,
      drunkLevel: 0
    }
    this.handleNameSubmission = this.handleNameSubmission.bind(this);
  }

  handleNameSubmission(name) {
    this.setState({
      name: name
    })
  }

  render() {
    let meeting = 'this is the meeting text'
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><LandingPage
            onNameSubmission={this.handleNameSubmission} />}
          />
          <Route path='/game' render={()=><Game
            name={this.state.name} /> }
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
