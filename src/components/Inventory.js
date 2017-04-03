import React from "react";
import AddMenuItem from "./AddMenuItem.js"

class Inventory extends React.Component {
    
    render() {
        return (
            <div className="order">
                <h2>Inventory</h2>
                <AddMenuItem />
            </div>
        );
    }
}

export default Inventory;
