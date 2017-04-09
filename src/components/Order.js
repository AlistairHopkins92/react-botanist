import React from "react";
import { formatPrice } from "../helpers"

class Order extends React.Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const main = this.props.mains[key];
        const count = this.props.order[key];
        
    if(!main || main.status === 'unavailable') {
      return <li key={key}>Sorry, {main ? main.name : 'main'} is no longer available!</li>
    }

    if( main.servingType === 'grams') {
        return (
          <li key={key}>
            <span>{count}00 grams {main.name} </span>
            <span className="price">{formatPrice(count * main.price)}</span>
        </li>  
        )
    }

   return (
        <li key={key}>
            <span>{count} X {main.name} </span>
            <span className="price">{formatPrice(count * main.price)}</span>
        </li>
        )
    }
    render() {
        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce((prevTotal, key) => {
            const main = this.props.mains[key];
            const count = this.props.order[key];
            const isAvailable = main && main.status === "available";
            if (isAvailable) {
                return prevTotal + (count * main.price || 0)
            }
            return prevTotal;
        }, 0)
        return (
            <div className="order-div">
                <h2>Your Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Order;