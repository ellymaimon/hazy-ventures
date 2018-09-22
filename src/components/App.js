import React, { Component } from 'react';
import LandingPage from './LandingPage';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
       currentBar: 0,
       drunkLevel: 0,
       dialogue: {
         meeting: "Great. It's 9:59 so let's get going. How would you like to get downtown?",
         tesla: "Bummer. You hit traffic and are running late.",
         scooter: "lorem ipsum"
       },    
    }
    this.handleNameSubmission = this.handleNameSubmission.bind(this);
  }

  handleNameSubmission(name) {
    this.setState({
      name: name
    })
  }
  
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/'
               render={()=><LandingPage onNameSubmission={this.handleNameSubmission} /> } />
        <Route path='/game' render={()=><Game onNameSubmission={this.handleNameSubmission} /> } />
        <Route path='/gameover' />
      </Switch>
      </div>
    );
  }
}

export default App;
