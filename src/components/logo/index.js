import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './styles.css';

const Logo = () => {
  const [repeat, setRepeat] = useState();
  const imgs = [];

  for (let i = 0; i < repeat && i < 6; i++) {
    imgs.push(<img key={i} src={logo} className="App-logo" alt="logo" />)
  }

  useEffect(() => {
    setRepeat(1);
  }, [repeat]);

  return (
    <>
      <div className="App-logo-container">
        {imgs}
      </div>
      <div className="App-logo-buttons">
        <button disabled={repeat === 1} onClick={() => setRepeat(state => state - 1)}>-</button>
        <button disabled={repeat === 6} onClick={() => setRepeat(state =>  state + 1)}>+</button>
      </div>
    </>
  )
}

export default Logo;