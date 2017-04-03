import React from 'react';
import Header from './Header';
import Customer from './Customer';
import PageHeader from './PageHeader';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);

    this.state = {
      mains: {},
      order: {}
    }
  }

  addItem(item) {
    console.log("sdnjgfsidjnf")
    console.log(item)
    const mains = {...this.state.mains}
    const timeStamp = Date.now();
    console.log(timeStamp)
    mains[`main-${timeStamp}`] = item;
    this.setState({ mains });
}
  
  render() {
    return (
      <div className="botanist">
        <Header />
        <PageHeader />
        <Customer addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;