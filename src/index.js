import React from 'react';
import ReactDom from 'react-dom';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom'


import {App} from './App'
ReactDom.render(<Router><App/></Router>, document.getElementById('root'));