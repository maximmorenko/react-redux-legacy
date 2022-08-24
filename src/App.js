import React from 'react';
import './App.css';
import { Counter } from './clicker_redux_hooks/counter';

function App() {
    return (
        <div className="App">
            <h1>Hello Redux</h1>
            <Counter />
        </div>
    );
}

export default App;
