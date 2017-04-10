import React from 'react';

class Header extends React.Component {
    render() {  
        var details = this.props.title
        return (
          <header className="top">
            <h1>{details}</h1>
            <img className="banner" src={require('../css/images/five-stars.png')} role='presentation' />
          </header>
         )
    }
}
export default Header;