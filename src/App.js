import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const getMessage = async () => fetch(`/api/myHelloWorld?name=${encodeURIComponent(input)}`)
    .then(response => response.text())
    .then(text => setMessage(text));

    useEffect(() => {
        getMessage(input);
    }, [input, getMessage])

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
                    Learn React
                </a>
                <p>
                    <label>Name:&nbsp;</label>
                    <input value={input} onChange={evt => setInput(evt.target.value)} />
                </p>
                <p>
                    <label>Message:&nbsp;</label>
                    <span>{message}</span>
                </p>
            </header>
        </div>
    );
}

export default App;
