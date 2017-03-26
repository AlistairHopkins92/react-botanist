import React from 'react';
import { formatPrice } from '../helpers';

class Menu extends React.Component {
    render() {
        const { details } = this.props;
        var pricePerHundred
        if(details.serving === 100){
            pricePerHundred = <span>Per 100 grams</span>
        }


        return (
            <li className="menu-mains">
                <h4 className="mains-name">
                    <span>{details.name}</span>
                    <p className="price">{formatPrice(details.price)} {pricePerHundred}</p>
                </h4>
                <img className="mains" role="presentation" src={details.image} />
            </li>
        )
    }
}
export default Menu;