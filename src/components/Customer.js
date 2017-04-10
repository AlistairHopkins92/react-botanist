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
    mains: sampleMains,
    sides: sampleSides,
    drinks: sampleDrinks,
    cocktails: sampleCocktails,
    puddings: samplePuddings,
    starters: sampleStarters,
    header: "Starters",
    currentpage: 'starters',
    order: {mains:{},
            sides:{},
            drinks:{},
            cocktails:{},
            puddings: {},
            starters: {}
          }
  };

  addItem(item, itemType) {
    const timeStamp = Date.now();
    if(itemType === 'mains'){
        const mains = {...this.state.mains}
        mains[`main-${timeStamp}`] = item;
        this.setState({ mains });
    } else if ( itemType === 'starters' ){
        const starters = {...this.state.starters}
        starters[`starter-${timeStamp}`] = item;
        this.setState({ starters });
    } else if ( itemType === 'sides' ){
        const sides = {...this.state.sides}
        sides[`side-${timeStamp}`] = item;
        this.setState({ sides });
    } else if ( itemType === 'drinks' ){
        const drinks = {...this.state.drinks}
        drinks[`drink-${timeStamp}`] = item;
        this.setState({ drinks });
    } else if ( itemType === 'puddings' ){
        const puddings = {...this.state.puddings}
        puddings[`pudding-${timeStamp}`] = item;
        this.setState({ puddings });
    } else if ( itemType === 'cocktails' ){
        const cocktails = {...this.state.cocktails}
        cocktails[`cocktail-${timeStamp}`] = item;
        this.setState({ cocktails });
    }

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
                .map(key => <Starters key={key} index={key} details={this.state.starters[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "sides"){
       return (
         <ul className="menu-content">
                {
              Object
                .keys(this.state.sides)
                .map(key => <Sides key={key} index={key} details={this.state.sides[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "puddings"){
       return (
          <ul className="menu-content">
                {
              Object
                .keys(this.state.puddings)
                .map(key => <Starters key={key} index={key} details={this.state.puddings[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "drinks"){
       return (
          <ul className="menu-content">
                {
              Object
                .keys(this.state.drinks)
                .map(key => <Drinks key={key} index={key} details={this.state.drinks[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        )
    } else if (this.state.currentpage === "cocktails"){
       return (
         <ul className="menu-content">
                {
              Object
                .keys(this.state.cocktails)
                .map(key => <Drinks key={key} index={key} details={this.state.cocktails[key]} addToOrder={this.addToOrder}/>)
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

addToOrder(key, details) {
  const order = {...this.state.order}
  order.mains[key] = order.mains[key] + 1 || 1;
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
        <Order page={this.state.currentpage} mains={this.state.mains} starters={this.state.starters} sides={this.state.sides} cocktails={this.state.cocktails} drinks={this.state.drinks} order={this.state.order}/>
      </div>
      </div>
    )
  }
}

export default App;