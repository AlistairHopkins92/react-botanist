import React from 'react';
import { formatPrice } from '../helpers';

class Mains extends React.Component {
    render() {
        const { details } = this.props;


        return (
            <li className="menu-mains">
                <h4>
                    {details.name}
                </h4>
                <img className="mains" role="presentation" src={details.image} />
                <h4>
                    <p className="price">{formatPrice(details.price)}</p>
                </h4>
            </li>
        )
    }
}
export default Mains;