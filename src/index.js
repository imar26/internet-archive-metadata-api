import React from 'react';
import ReactDOM from 'react-dom';

// Import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import Font Awesome Icons
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Styles
import './index.css';

// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';

// Import Reducers
// import rootReducer from './reducers/rootReducer';

// Import Mappers
// import { mapStateToProps, mapDispatchToProps } from './mappers';

// Import Containers
import App from './containers/App';

// let store = createStore(rootReducer);

// const Root = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);