import React from 'react';
import { formatPrice } from '../helpers';

class Mains extends React.Component {
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? "Add To Order" : "Sold Out";


        return (
            <li className="menu-mains">
                <h4>
                    {details.name}
                </h4>
                <img className="mains" role="presentation" src={details.image} />
                <h4>
                    <p className="price">{formatPrice(details.price)}</p>
                </h4>
                <h4>
                    <button onClick={() => this.props.addToOrder(index, details)} disabled={!isAvailable}>{buttonText}</button>
                </h4>
            </li>
        )
    }
}
export default Mains;