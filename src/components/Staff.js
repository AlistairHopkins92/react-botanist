import React from 'react';
import Header from './Header';
import Customer from './Customer'
import PageHeader from './PageHeader';
import Order from './Order'

class App extends React.Component {
constructor() {
    super();
  }
  
  render() {
    return (
      <div className="botanist">
        <Header />
        <PageHeader page="Staff"/>
        <Customer />
      </div>
    )
  }
}

export default App;