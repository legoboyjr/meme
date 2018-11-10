import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2 className="d-flex justify-content-center font-weight-bold bg-danger mb-0 pt-2 pb-2">Meme</h2>
          <ul class="nav nav-pills nav-fill border-bottom bg-dark">
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Main Memes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Spicy Comments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">My Memes</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
