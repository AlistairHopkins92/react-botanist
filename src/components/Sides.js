import React from 'react';
import { formatPrice } from '../helpers';

class Sides extends React.Component {
    render() {
        const { details } = this.props;

        return (
            <li className="menu-mains">
                <h4 className="mains-name">
                    <span>{details.name}</span>
                    <p className="price">{formatPrice(details.price)}</p>
                </h4>
                <img className="mains" role="presentation" src={details.image} />
            </li>
        )
    }
}
export default Sides;