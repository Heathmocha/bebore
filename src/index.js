import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Header from './component/header';
import History from './component/history';
import Entry from './component/entry';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//before
//ReactDOM.render(<App />, document.getElementById('root'));

// Render the router and the different componets per the path. The '/' path
// must match exactly otherwise it was always loading with the other paths
ReactDOM.render((
    <BrowserRouter>
        <div>
            <Header />
            <Route path="/" exact component={App}/>
            <Route path="/history" component={History}/>
            <Route path="/entry" component={Entry}/>
            <Route path="/inventory" component={App}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
