import React from 'react';

class ViewHandler extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
    this.state = {value: 'Customer'};
  }


  goToStore(event) {
    console.log(event)
    event.preventDefault();
    const storeId = this.state.vaule;
    console.log(storeId)
    this.context.router.transitionTo(`/${storeId}`);
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Role</h2>
        <select type="text" value={this.state.value} onChange={(input) => { this.storeInput = input}}>
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