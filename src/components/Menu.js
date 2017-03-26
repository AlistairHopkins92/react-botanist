import React from 'react';
import { formatPrice } from '../helpers';

class Menu extends React.Component {
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === 'available';
        const perUnitWeight = details.serving === 100
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
        var pricePerHundred
        if(details.serving === 100){
            pricePerHundred = <span>Per 100 grams</span>
        }


        return (
            <li className="menu-mains">
                <h4 className="mains-name">
                  <span>{details.name}</span>
                </h4>
                <img className="mains" src={details.image} />
                <p className="price">{formatPrice(details.price)} {pricePerHundred}</p>

            </li>
        )
    }
}
export default Menu;