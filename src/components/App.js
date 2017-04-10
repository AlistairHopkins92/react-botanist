import React from 'react';
import Header from './Header';
import Customer from './Customer';
import PageHeader from './PageHeader';

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
        <PageHeader page="Customer"/>
        <Header title={pageTitle}/>
      </div>
        <Customer />
      </div>
    )
  }
}

export default App;