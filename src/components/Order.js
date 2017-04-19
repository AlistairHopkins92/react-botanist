import React from "react";
import { formatPrice } from "../helpers"

class Order extends React.Component {
    constructor() {
        super();
        this.renderMainsOrder = this.renderMainsOrder.bind(this);
    }

    renderMainsOrder(key) {
        const count = this.props.order.mains[key];
        const main = this.props.mains[key]
        if(Object.keys(this.props.order.mains).length > 0){
            if(main.servingType === 'grams') {
                return (
                    <li key={key}>
                        <span>{count}00 grams {main.name} </span>
                        <span className="price">{formatPrice(count * main.price)}</span>
                    </li>  
                )
            }else{    
                return (
                    <li key={key}>
                        <span>{count} X {main.name} </span>
                        <span className="price">{formatPrice(count * main.price)}</span>
                    </li>
                )
            }
        }
    }

    render() {
        const mainOrderIds = Object.keys(this.props.order.mains)
        const total = mainOrderIds.reduce((prevTotal, key) => {
            const main = this.props.mains[key];
            const starter = this.props.starters[key]
            const count = this.props.order.mains[key];
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
                    {mainOrderIds.map(this.renderMainsOrder)}
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