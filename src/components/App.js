import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader';
import Mains from './Mains.js';
import Sides from './Sides.js';
import Drinks from './Drinks.js';
import sampleMains from '../mains.js';
import sampleSides from '../sides.js';
import sampleDrinks from '../drinks.js';

class App extends React.Component {
constructor() {
    super();
    // this.loadMenu = this.loadMenu.bind(this);
  }
  
state = {
    mains: sampleMains,
    sides: {},
    drinks: {}
  };

loadMenu(page) {
    console.log(page)
    // this.setState({
    //   mains: sampleMains,
    //   sides: sampleSides
    // });
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
            <h4>Meat</h4>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.mains)
                .map(key => <Mains key={key} index={key} details={this.state.mains[key]}/>)
            }
            </ul>
        </div>
         <div className="menu">
            <h4>Sides</h4>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.sides)
                .map(key => <Sides key={key} index={key} details={this.state.sides[key]}/>)
            }
            </ul>
        </div>
        <div className="menu">
            <h4>Drinks</h4>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.drinks)
                .map(key => <Drinks key={key} index={key} details={this.state.drinks[key]}/>)
            }
            </ul>
        </div>
      </div>
    )
  }
}

export default App;