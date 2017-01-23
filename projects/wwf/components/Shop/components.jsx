import React, { Component } from 'react';

import CategorizedTilesContainer from '../../common/containers/CategorizedTilesContainer.js';

export default class Shop extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Component Content", this.props.componentContent)
    return (
      <div className="categorizedTiles" >
        <CategorizedTilesContainer />
      </div>
    );
  }
}
