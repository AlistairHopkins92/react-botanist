import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader';
import Inventory from './Inventory';
import Order from './Order';
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

class App extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }
  
state = {
    order: {},
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

    if (page === "mains"){
      this.setState({
      mains: sampleMains,
    });
    } else if (page === "sides"){
      this.setState({
      sides: sampleSides,
    });
    } else if (page === "starters"){
      this.setState({
      starters: sampleStarters,
    });
    } else if (page === "puddings"){
      this.setState({
      puddings: samplePuddings,
    });
    } else if (page === "cocktails"){
      this.setState({
      cocktails: sampleCocktails,
    });
  }
  
}

addToOrder(key) {
  const order = {...this.state.order}
  console.log(key)
  order[key] = order[key] + 1 || 1;
  this.setState({order})
}

  render() {
    return (
      <div>
        <span className="pages">
          <button className="menu-pages" onClick={() => this.loadMenu('starters')}>Starters</button>
          <button className="menu-pages" onClick={() => this.loadMenu('mains')}>Mains</button>
          <button className="menu-pages" onClick={() => this.loadMenu('sides')}>Sides</button>
          <button className="menu-pages" onClick={() => this.loadMenu('puddings')}>Puddings</button>
        </span>
        <span className="pages">
          <button className="menu-pages" onClick={() => this.loadMenu('drinks')}>Drinks</button>
          <button className="menu-pages" onClick={() => this.loadMenu('cocktails')}>Cocktials</button>
          <button className="menu-pages" onClick={() => this.loadMenu('other')}>Other</button>
          <button className="menu-pages" onClick={() => this.loadMenu('contact')}>Contact</button>
        </span>
         <div className="menu">
        <h2>{this.state.header}</h2>
        <div className="customerView">
            <ul className="menu-content">
                {
              Object
                .keys(this.state.mains)
                .map(key => <Mains key={key} index={key} details={this.state.mains[key]} addToOrder={this.addToOrder}/>)
            }
            </ul>
        </div>
         <div>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.sides)
                .map(key => <Sides key={key} index={key} details={this.state.sides[key]}/>)
            }
            </ul>
        </div>
        <div>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.cocktails)
                .map(key => <Drinks key={key} index={key} details={this.state.cocktails[key]}/>)
            }
            </ul>
        </div>
      <div>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.starters)
                .map(key => <Starters key={key} index={key} details={this.state.starters[key]}/>)
            }
            </ul>
        </div>
        <div>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.puddings)
                .map(key => <Starters key={key} index={key} details={this.state.puddings[key]}/>)
            }
            </ul>
        </div>
        </div>
      <div className="Hidden">
       <Inventory addItem={this.addItem}/>
      </div>
      <div className="customerView">
        <Order />
      </div>
      </div>
    )
  }
}

export default App;