import React from 'react';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';

import RootContainer from './containers/RootContainer.jsx';
import LayoutContainer from './containers/LayoutContainer.js';
import HomeContainer from './containers/HomeContainer.js';
import ShopContainer from './containers/ShopContainer.js';
import AboutContainer from './containers/AboutContainer.js';
import EventsContainer from './containers/EventsContainer.js';

Route.propTypes = {
  component: React.PropTypes.object,
  path: React.PropTypes.string
};

export default (
  <Route component={RootContainer}>
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path="home" component={HomeContainer} />
      <Route path="shop" component={ShopContainer} />
      <Route path="about" component={AboutContainer} />
      <Route path="events" component={EventsContainer} />
    </Route>
  </Route>
);