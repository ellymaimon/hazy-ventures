import React from 'react';
import  { BrowserRouter as Router, Route, Link }  from 'react-router-dom'

const LandingPage = (props) => {

  const handleNameSubmission = (e) => {
    e.preventDefault();
    let userName = e.target.name.value;
    props.onNameSubmission(userName);
  }

  return (
    <Router>
      <div>
        <h1>Hazy Ventures Game</h1>
        <form onSubmit={handleNameSubmission}>
          <input name="name">What's yer name?</input>
          <Link to='/game'><button type="submit">Start Game</button></Link>
        </form>
      </div>
    </Router>
  )
}

export default LandingPage;
