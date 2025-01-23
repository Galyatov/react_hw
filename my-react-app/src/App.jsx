import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [userInput, setUserInput] = useState('');

    return (
        <>
            <div className="header">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Welcome to Vite + React Playground!</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <div className="input-section">
                <h2>Interactive Input</h2>
                <input
                    type="text"
                    placeholder="Type something..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <p>You typed: <strong>{userInput}</strong></p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
