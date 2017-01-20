import React, { Component } from 'react';
import NavContainer from '../../common/containers/NavContainer';
import DynamicSliderContainer from '../../common/containers/DynamicSliderContainer';
import FooterContainer from '../../common/containers/FooterContainer';
import './styles/test.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app" >
        <NavContainer />
        <DynamicSliderContainer />
        <FooterContainer />
      </div>
    );
  }
}
