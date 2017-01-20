import React, { Component } from 'react';
import NavContainer from '../../common/containers/NavContainer';
import DynamicSliderContainer from '../../common/containers/DynamicSliderContainer';
import TileLinksContainer from '../../common/containers/TileLinksContainer';
import FooterContainer from '../../common/containers/FooterContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div  >
        <NavContainer />
        <DynamicSliderContainer />
        <TileLinksContainer />
        <FooterContainer />
      </div>
    );
  }
}
