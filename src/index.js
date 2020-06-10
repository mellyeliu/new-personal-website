import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        {/* <Route path="/exp" component={Resume} /> */}
        {/* <Route path="/writing" component={WritingPortfolio} /> */}
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
