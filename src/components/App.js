import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader'
import Mains from './Menu.js';
import sampleMains from '../mains.js'
import sampleSides from '../sides.js'

class App extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
  }
  
state = {
    mains: sampleMains,
    sides: sampleSides
  };

loadMenu() {
    this.setState({
      mains: sampleMains,
      sides: sampleSides
    });
  }

  render() {
    return (
      <div className="botanist">
        <Header />
        <PageHeader />
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
      </div>
    )
  }
}

export default App;