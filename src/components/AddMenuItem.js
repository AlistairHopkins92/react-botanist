import React from "react";

class AddMenuItem extends React.Component {
    
    render() {
        return (
            <form className='menu-edit'>
                <input type='text' placeholder='Item Name' />
                <input type='text' placeholder='Item Price' />
                <input type='text' placeholder='Item Status' />
                <select>
                    <option value="available">In Stock</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <input type='text' placeholder='Item Image' />
                <button type='submit'>+ Add Item</button>
            </form>
        );
    }
}

export default AddMenuItem;