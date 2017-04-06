import React from 'react';
import Header from './Header';
import Customer from './Customer';
import PageHeader from './PageHeader';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      mains: {},
      order: {}
    }
  }


  render() {
    return (
      <div className="botanist">
        <Header />
        <PageHeader />
        <Customer />
      </div>
    )
  }
}

export default App;