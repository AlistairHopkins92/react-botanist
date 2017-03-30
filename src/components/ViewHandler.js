import React from 'react';
import { makePubName } from '../helpers'

class ViewHandler extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.state = {roleValue: 'Customer'};
  }


  goToStore(event) {
    event.preventDefault();
    // const storeId = this.state.vaule;
    const pubName = this.storeName.value;
    const restaurantRole = this.state.roleValue
    this.context.router.transitionTo(`/${pubName}/${restaurantRole}`);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.state.roleValue = event.target.value
    // this.storeRole = event.target.value;
    // this.setState({value: event.target.value});
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h1>Please Enter A Store</h1>
        <input type="text" required placeholder="Store Name" defaultValue={makePubName()} ref={(input) => {this.storeName = input}} />
        <h1>and A Role</h1>
        <select className="role-selector" type="text" defaultValue={this.state.roleValue} onChange={this.handleChange}>
          <option value="Customer">Customer</option>
          <option value="Staff">Staff</option>
          <option value="Manager">Manager</option>
        </select>
        <button type="submit">Visit {this.storeName}→</button>
      </form>
    )
  }
}

ViewHandler.contextTypes = {
  router: React.PropTypes.object
}

export default ViewHandler;