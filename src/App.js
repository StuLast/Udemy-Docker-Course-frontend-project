import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <p>Demo App with build-flow of github, travisCI and heroku</p>
        <p>View repo and details at 
          <a href="https://github.com/StuLast/Udemy-Docker-Course-frontend-project" target="_blank">
            https://github.com/StuLast/Udemy-Docker-Course-frontend-project
          </a>
        </p>
        <p>Created by 
          <a href="https://stulast.github.io/" target="_blank">
            Stuart Last
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
