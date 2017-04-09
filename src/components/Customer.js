import React from 'react';
import Inventory from './Inventory';
import Order from './Order';
import Mains from './Mains.js';
import Sides from './Sides.js';
import Drinks from './Drinks.js';
import Starters from './Starters.js';
import sampleMains from '../mains.js';
import sampleSides from '../sides.js';
import sampleDrinks from '../drinks.js';
import sampleCocktails from '../cocktails.js';
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
    mains: sampleMains,
    sides: sampleSides,
    drinks: sampleDrinks,
    cocktails: sampleCocktails,
    puddings: samplePuddings,
    starters: sampleStarters,
    header: "Starters",
    currentpage: 'starters',
  };

  addItem(item) {
    const mains = {...this.state.mains}
    const timeStamp = Date.now();
    mains[`main-${timeStamp}`] = item;
    this.setState({ mains });
}
renderMenu() {
    if (this.state.currentpage === "mains"){
       return (
         <ul className="menu-content">
                {
              Object
                .keys(this.state.mains)
                .map(key => <Mains key={key} index={key} details={this.state.mains[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "starters"){
       return (
         <ul className="menu-content">
                {
              Object
                .keys(this.state.starters)
                .map(key => <Starters key={key} index={key} details={this.state.starters[key]}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "sides"){
       return (
         <ul className="menu-content">
                {
              Object
                .keys(this.state.sides)
                .map(key => <Sides key={key} index={key} details={this.state.sides[key]}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "puddings"){
       return (
          <ul className="menu-content">
                {
              Object
                .keys(this.state.puddings)
                .map(key => <Starters key={key} index={key} details={this.state.puddings[key]}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "drinks"){
       return (
          <ul className="menu-content">
                {
              Object
                .keys(this.state.drinks)
                .map(key => <Drinks key={key} index={key} details={this.state.drinks[key]}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "cocktails"){
       return (
         <ul className="menu-content">
                {
              Object
                .keys(this.state.cocktails)
                .map(key => <Drinks key={key} index={key} details={this.state.cocktails[key]}/>)
            }
            </ul>
        )
    }
 }

loadMenu(page) {
    this.setState({
      currentpage: page,
    });
}

addToOrder(key) {
  const order = {...this.state.order}
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
        <h2>{this.state.currentpage}</h2>
        <div className="customerView">
            { this.renderMenu() }
        </div>
        </div>
      <div className="Hidden">
       <Inventory addItem={this.addItem}/>
      </div>
      <div className="customerView">
        <Order mains={this.state.mains} order={this.state.order}/>
      </div>
      </div>
    )
  }
}

export default App;