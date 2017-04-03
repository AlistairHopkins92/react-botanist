import React from "react";

class AddMenuItem extends React.Component {
    
    createItem(event) {
        event.preventDefault();
        const itemType = this.type.value;
        const item = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            image: this.image.value
        };
        this.props.addItem(item)
        this.menuForm.reset();
    }

    render() {
        return (
            <form ref={(input) => this.menuForm = input } className='menu-edit' onSubmit={(e) => this.createItem(e)} >
                <input ref={(input) => this.name = input} type='text' placeholder='Item Name' />
                <input ref={(input) => this.price = input} type='text' placeholder='Item Price' />
                <select ref={(input) => this.status = input} >
                    <option value="available">In Stock</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <select ref={(input) => this.type = input} >
                    <option value="starters">Starters</option>
                    <option value="mains">Mains</option>
                    <option value="sides">Sides</option>
                    <option value="deserts">Deserts</option>
                    <option value="drinks">Drinks</option>
                    <option value="cocktails">Cocktails</option>
                </select>
                <input ref={(input) => this.image = input}  type='text' placeholder='Item Image' />
                <button type='submit'>+ Add Item</button>
            </form>
        );
    }
}

export default AddMenuItem;