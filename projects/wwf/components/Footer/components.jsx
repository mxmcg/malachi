import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="footer" >
        <h1>Footer</h1>
      </div>
    );
  }
}
