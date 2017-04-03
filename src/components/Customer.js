import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader';
import Order from './Order'
import Mains from './Mains.js';
import Sides from './Sides.js';
import Drinks from './Drinks.js';
import Starters from './Starters.js';
import Puddings from './Puddings.js';
import sampleMains from '../mains.js';
import sampleSides from '../sides.js';
import sampleDrinks from '../drinks.js';
import sampleStarters from '../starters.js';
import samplePuddings from '../puddings.js'

class App extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
  }
  
state = {
    mains: {},
    sides: {},
    drinks: {},
    puddings: {},
    starters: sampleStarters,
    header: "Starters"
  };

loadMenu(page) {

    this.setState({
      mains: {},
      sides: {},
      starters: {},
      puddings: {},
      drinks: {},
    })

    if (page === "mains"){
      this.setState({
      mains: sampleMains,
      header: "Mains"
    });
    } else if (page === "sides"){
      this.setState({
      sides: sampleSides,
      header: "Sides"
    });
    } else if (page === "starters"){
      this.setState({
      starters: sampleStarters,
      header: "Starters"
    });
    } else if (page === "puddings"){
      this.setState({
      puddings: samplePuddings,
      header: "Puddings"
    });
    } else if (page === "drinks"){
      this.setState({
      drinks: sampleDrinks,
      header: "Drinks"
    });
    } else {
      this.setState({
      header: "Other"

    });
  }
  
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
          <button className="menu-pages" onClick={() => this.loadMenu('bevs')}>Drinks</button>
          <button className="menu-pages" onClick={() => this.loadMenu('drinks')}>Cocktials</button>
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
                .map(key => <Mains key={key} index={key} details={this.state.mains[key]}/>)
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
                .keys(this.state.drinks)
                .map(key => <Drinks key={key} index={key} details={this.state.drinks[key]}/>)
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
      <div className="customerView">
       <Order />
      </div>
      </div>
    )
  }
}

export default App;