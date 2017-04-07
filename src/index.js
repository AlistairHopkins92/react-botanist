import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import ViewHandler from './components/ViewHandler';
import App from './components/App';
import Staff from './components/Staff';
import ManagementPage from './components/Management-Page.js';
import NotFound from './components/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ViewHandler} />
        <Match pattern="/:storeId/Customer" component={App} />
        <Match pattern="/:storeId/Staff" component={Staff} />
        <Match pattern="/:storeId/Manager" component={ManagementPage} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
