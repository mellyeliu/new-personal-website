import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Blog from './Blog';
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
