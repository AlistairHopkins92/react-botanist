import React from "react";
import { formatPrice } from "../helpers"

class Order extends React.Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        console.log([key])
        const page = this.props.page
        const count = this.props.order[key];
        const unit = this.props.starters[key]
        if(page === 'mains'){
            console.log('mains')
            const main = this.props.mains[key];
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
        }else if(this.props.starters[key]){
            // console.log('starters')
            const unit = this.props.starters[key]
        }
        
 
    }
    render() {
        const orderIds = Object.keys(this.props.order)
        console.log(orderIds)
        const total = orderIds.reduce((prevTotal, key) => {
            const main = this.props.mains[key];
            const starter = this.props.starters[key]
            const count = this.props.order[key];
            const isAvailable = main && main.status === "available";
            if (isAvailable) {
                return prevTotal + (count * main.price || 0)
            }
            return prevTotal;
        }, 0)
        console.log(total)
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