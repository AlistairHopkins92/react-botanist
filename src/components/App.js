import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader';
import Order from './Order'
import Mains from './Mains.js';
import Sides from './Sides.js';
import Drinks from './Drinks.js';
import sampleMains from '../mains.js';
import sampleSides from '../sides.js';
import sampleDrinks from '../drinks.js';

class App extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
  }
  
state = {
    mains: sampleMains,
    sides: {},
    drinks: {}
  };

loadMenu(page) {
    console.log(page)
    console.log(this.state)
    if (page === "mains"){
      this.setState({
      mains: sampleMains,
      sides: {},
      drinks: {}
    });
    } else if (page === "sides"){
      this.setState({
      mains: {},
      sides: sampleSides,
      drinks: {}
    });
    } else if (page === "drinks"){
      this.setState({
      mains: {},
      sides: {},
      drinks: sampleDrinks
    });
    } else {
      this.setState({
      mains: {},
      sides: {},
      drinks: {}
    });
    }
  }

  render() {
    return (
      <div className="botanist">
        <Header />
        <PageHeader />
        <span className="pages">
          <button className="menu-pages" onClick={() => this.loadMenu('mains')}>Mains</button>
          <button className="menu-pages" onClick={() => this.loadMenu('sides')}>Sides</button>
          <button className="menu-pages" onClick={() => this.loadMenu('drinks')}>Drinks</button>
          <button className="menu-pages" onClick={() => this.loadMenu('other')}>Other</button>
        </span>
         <div className="menu">
        <div className="customerView">
            <ul className="menu-content">
                {
              Object
                .keys(this.state.mains)
                .map(key => <Mains key={key} index={key} details={this.state.mains[key]}/>)
            }
            </ul>
        </div>
         <div className="menu">
            <ul className="menu-content">
                {
              Object
                .keys(this.state.sides)
                .map(key => <Sides key={key} index={key} details={this.state.sides[key]}/>)
            }
            </ul>
        </div>
        <div className="menu">
            <ul className="menu-content">
                {
              Object
                .keys(this.state.drinks)
                .map(key => <Drinks key={key} index={key} details={this.state.drinks[key]}/>)
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