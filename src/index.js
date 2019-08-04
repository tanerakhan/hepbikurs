import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './utils/style/main.css'
import 'bootstrap/dist/css/bootstrap.css';
require('dotenv').config()
ReactDOM.render(<App />, document.getElementById('root'));