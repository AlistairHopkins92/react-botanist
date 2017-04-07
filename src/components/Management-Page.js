import React from 'react';
import Header from './Header';
import Management from './Management';
import PageHeader from './PageHeader';
import Order from './Order';
import Inventory from './Inventory';


class ManagementPage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      mains: {},
      order: {}
    }
  }


  render() {
    const pageTitle = this.props.params.storeId
    return (
      <div className="botanist">
      <div className="backgkgroundImage">
        <Header title={pageTitle}/>
        <PageHeader page="Manager"/>
      </div>
        <Management />
      </div>
    )
  }
}

export default ManagementPage;