import React, { Component } from 'react';

import NavContainer from '../../common/containers/NavContainer';
import HomeContainer from '../../common/containers/HomeContainer';
import ShopContainer from '../../common/containers/ShopContainer';
import AboutContainer from '../../common/containers/AboutContainer';
import EventsContainer from '../../common/containers/EventsContainer';
import FooterContainer from '../../common/containers/FooterContainer';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <NavContainer />
        { this.props.children }
        <FooterContainer />
      </div>
    );
  }
}
