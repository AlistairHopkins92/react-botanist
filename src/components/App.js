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
      mains: {}
    }
  }


  render() {
    const pageTitle = this.props.params.storeId
    return (
      <div className="botanist">
      <div className="backgkgroundImage">
        <Header title={pageTitle}/>
        <PageHeader page="Customer"/>
      </div>
        <Customer />
      </div>
    )
  }
}

export default App;