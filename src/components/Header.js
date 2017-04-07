import React from 'react';

class Header extends React.Component {
    render() {  
        var details = this.props.title
        return (
          <header className="top">
            <h1>{details}</h1>
          </header>
         )
    }
}
export default Header;