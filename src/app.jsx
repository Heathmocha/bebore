import React, { Component } from 'react';
import './app.css';

import Header from './component/header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="App">
                    <p className="App-intro">
                        This is some random text and this is <code>some code</code>.
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
