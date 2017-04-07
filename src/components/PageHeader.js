import React from 'react';

class PageHeader extends React.Component {
    render() {  
        var details = this.props.page;
  
        return (
          <pageheader className="top">
            <h2>Restaurant Pub Manager - {details} View</h2>
          </pageheader>
         )
    }
}

export default PageHeader;