import React, { useState } from 'react';
import './App.css';

function App() {
  const [fortune, setFortune] = useState('');

  const fetchFortune = async () => {
    const response = await fetch('/api/fortune');
    const data = await response.json();
    setFortune(data.fortune);
  };

  return (
    <div className="container">
      <h1>おみくじ React版</h1>
      <button onClick={fetchFortune} className="button">
        占ってみる？…別にアンタのためじゃないけど！
      </button>
      <p className="result">{fortune}</p>
    </div>
  );
}

export default App;
