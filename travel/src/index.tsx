import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {SidebarContextProvider} from './store/sidebar-context';
import './index.scss';
import App from './App';

ReactDOM.render(<SidebarContextProvider><BrowserRouter><App /></BrowserRouter></SidebarContextProvider>, document.getElementById('root'));