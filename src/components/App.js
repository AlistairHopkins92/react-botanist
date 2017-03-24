import React from 'react';
import Header from './Header';
import Menu from './Menu.js';
import sampleMains from '../mains.js'

class App extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
  }
  
state = {
    mains: {}
  };

loadMenu() {
    this.setState({
      mains: sampleMains
    });
  }

  render() {
    return (
      <div className="botanist">
        <Header />
        <div className="menu">
            <h2>Menu</h2>
            <ul className="menu-content">
                {
              Object
                .keys(this.state.mains)
                .map(key => <Menu key={key} index={key} details={this.state.mains[key]}/>)
            }
            </ul>
        </div>
      </div>
    )
  }
}

export default App;