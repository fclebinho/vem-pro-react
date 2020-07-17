import React from 'react';


import './styles.css';

const Header = ({children}) => {
  return (
    <header className="App-header">
      {children}
    </header>
  );
}

export default Header;