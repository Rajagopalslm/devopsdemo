import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [deployTime, setDeployTime] = useState(new Date().toLocaleString());

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 DevOps Demo Application</h1>
        <p className="subtitle">Automated Deployment with GitHub Actions</p>
        
        <div className="demo-section">
          <h2>Interactive Counter</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="count">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        <div className="info-section">
          <h3>✅ Deployment Features</h3>
          <ul>
            <li>Automated builds on every push</li>
            <li>Continuous deployment to GitHub Pages</li>
            <li>Build status monitoring</li>
            <li>Zero downtime deployment</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h3>🛠️ Tech Stack</h3>
          <div className="badges">
            <span className="badge">React</span>
            <span className="badge">GitHub Actions</span>
            <span className="badge">GitHub Pages</span>
            <span className="badge">CI/CD</span>
          </div>
        </div>

        <footer className="deploy-info">
          <p>Last updated: {deployTime}</p>
          <p>Built with ❤️ for CSE DevOps Demo</p>
        </footer>
      </header>
    </div>
  );
}

export default App;