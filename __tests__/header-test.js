import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/component/header';

it('render the Header component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});
