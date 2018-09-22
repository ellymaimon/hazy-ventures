import React from 'react';

const LandingPage = (props) => {

  const handleNameSubmission = (e) => {
    e.preventDefault();
    let userName = e.target.name.value;
    props.onNameSubmission(userName);
  }

  return (
    <div>
        <h1>Hazy Ventures Game</h1>
        <form onSubmit={handleNameSubmission}>
          <input name="name"/>
          <button type="submit">Start Game</button>
        </form>
      </div>
  );
}

export default LandingPage;
