import React, { Component } from 'react';
import { Dialogue } from './Dialogue';

class App extends Component {
  render() {
    let meeting = 'this is the meeting text'
    return (
      <div>
        <p>Hi</p>
        <Dialogue 
          text={meeting}
        />
      </div>
    );
  }
}

export default App;
