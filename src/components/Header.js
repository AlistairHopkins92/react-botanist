import React from 'react';

class Header extends React.Component {
    render() {  
        var details = this.props.title
        return (
          <header className="top">
            <img className="flip" src={require('../css/images/five-stars.png')} role='presentation' />
            <h1>{details}</h1>
            <img className="banner" src={require('../css/images/five-stars.png')} role='presentation' />
          </header>
         )
    }
}
export default Header;