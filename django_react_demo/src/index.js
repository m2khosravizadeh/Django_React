import React, { Component } from 'react';
import { render } from 'react-dom';
const App = () => {
    return (
        <div>
            <h1>Hello, World !</h1>
        </div>
    )
}
render(
    <App/>,
    document.getElementById('root')
);