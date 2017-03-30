import React from 'react';
import { makePubName } from '../helpers'

class ViewHandler extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
    this.state = {value: 'Customer'};
  }


  goToStore(event) {
    event.preventDefault();
    const storeId = this.state.vaule;
    this.context.router.transitionTo(`/${storeId}`);
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store and A Role</h2>
        <input type="text" required placeholder="Store Name" defaultValue={makePubName()} />
        <select className="role-selector" type="text" value={this.state.value} onChange={(input) => { this.storeInput = input}}>
          <option value="Customer">Customer</option>
          <option value="Staff">Staff</option>
          <option value="Manager">Manager</option>
        </select>
        <button type="submit">Visit The Botanist→</button>
      </form>
    )
  }
}

ViewHandler.contextTypes = {
  router: React.PropTypes.object
}

export default ViewHandler;