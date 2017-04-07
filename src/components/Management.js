import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader';
import Inventory from './Inventory'
import Mains from './Mains.js';
import Sides from './Sides.js';
import Drinks from './Drinks.js';
import Starters from './Starters.js';
import Puddings from './Puddings.js';
import sampleMains from '../mains.js';
import sampleSides from '../sides.js';
import sampleCocktails from '../drinks.js';
import sampleStarters from '../starters.js';
import samplePuddings from '../puddings.js';

class Management extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  
state = {
    mains: {},
    sides: {},
    cocktails: {},
    puddings: {},
    starters: sampleStarters,
    header: "Starters"
  };

  addItem(item) {
    const mains = {...this.state.mains}
    const timeStamp = Date.now();
    mains[`main-${timeStamp}`] = item;
    this.setState({ mains });
}

loadMenu(page) {
    this.setState({
      mains: {},
      sides: {},
      starters: {},
      puddings: {},
      cocktails: {},
      header: page
    })
}


  render() {
    return (
      <div>

      <div className="customerView">
       <Inventory addItem={this.addItem}/>
      </div>
      </div>
    )
  }
}

export default Management;







/*import React from 'react';
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

export default App;*/