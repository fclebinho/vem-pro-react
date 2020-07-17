import React from 'react';
import './App.css';

import Header from './components/header';
import Logo from './components/logo';
import Link from './components/link';

function App() {
  return (
    <div className="App">
      <Header >
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link />
      </Header>
    </div>
  );
}

export default App;
