import React, { Component } from 'react';

import User from './components/User'
import UserBoard from './components/UserBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <main>
          <UserBoard />
          <User name="Hoan Phung" />
          <User name="Vanya" />
          <User name="Sanh" />
        </main>
      </div>
    );
  }
}

export default App;
