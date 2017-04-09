import React from "react";
import AddMenuItem from "./AddMenuItem.js"

class Inventory extends React.Component {
    
    render() {
        return (
            <div className="order-div">
                <h2>Inventory</h2>
                <AddMenuItem addItem={this.props.addItem}/>
            </div>
        );
    }
}

export default Inventory;
