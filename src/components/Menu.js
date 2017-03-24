import React from 'react';
import { formatPrice } from '../helpers';

class Menu extends React.Component {
    

    
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
        return (
            <li className="menu-mains">
                <h3 className="mains-name">
                  {details.name}
                </h3>
            </li>
        )
    }
}
export default Menu;