import React from 'react';
import Header from './Header';
import PageHeader from './PageHeader'
import Menu from './Menu.js';
import sampleMains from '../mains.js'

class App extends React.Component {
constructor() {
    super();
    this.loadMenu = this.loadMenu.bind(this);
  }
  
state = {
    mains: sampleMains
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
        <PageHeader />
        <div className="menu">
            <h4>Meat</h4>
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