import React from 'react';
import ReactDOM from 'react-dom';

// Import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import Font Awesome Icons
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Styles
import './index.css';

// Import Containers
import App from './containers/App';

// Routes
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/contents/:identifier" component={App} />
        </div>
    </Router>,
    document.getElementById("root")
);