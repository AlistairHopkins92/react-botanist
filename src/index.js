import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import './css/style.css';
import ViewHandler from './components/ViewHandler';
import App from './components/App';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ViewHandler} />
        <Match pattern="/:storeId" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
