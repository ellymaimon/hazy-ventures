import React, { Component } from 'react'

class LandingPage extends Component {

  handleNameSubmission(e) {
    e.preventDefault();
    let userName = e.target.name.value;

    props.onNameSubmission(userName);
  }

  render() {
    return (
      <div>
        <h1>Hazy Ventures Game</h1>
        <form onSubmit={handleNameSubmission}>
          <input name="name">What's yer name?</input>
          <button type="submit">Start Game</button>
        </form>
      </div>
    )
  }
}

export default LandingPage;
