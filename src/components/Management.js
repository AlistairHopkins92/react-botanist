import React from 'react';
import Header from './Header';
import Customer from './Customer';
import PageHeader from './PageHeader';
import Inventory from './Inventory.js'

class App extends React.Component {
constructor() {
    super();
  }
  
  render() {
    return (
      <div className="botanist">
        <Header />
        <PageHeader />
        <div className="customerView">
       <Inventory />
      </div>
      </div>
    )
  }
}

export default App;