import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dialogue } from './Dialogue';
import LandingPage from './LandingPage';

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
        </Switch>
        <p>Hi</p>
        <Dialogue 
          text={meeting}
        />
      </div>
    );
  }
}

export default App;
