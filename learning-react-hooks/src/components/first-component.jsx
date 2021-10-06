import React from 'react';
import logo from './../logo.svg';
import './../App.css';
function FirstComponent() {
    return (
        <div className='App'>
            <div className='App-header'>
            <img src={logo} className="App-logo" alt="logo" />
                {'Hello! Welcome in first component by Route, Switch, Router'}
            </div>
        </div>
    );
}

export default FirstComponent;
