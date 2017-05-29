import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';

it('render the App component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
