import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PromoBanner from '../../components/PromoBanner/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class PromoBannerContainer extends Component {

  render () {
    return (
      <PromoBanner {...this.props} />
    );
  }
}

PromoBannerContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.NavContainer.PromoBannerContainer;
  const cdnImageBase = state.urls.cdnImageBase;
  const cdnUrl = state.urls.cdnUrl
  return {
    componentContent,
    cdnUrl,
    cdnImageBase
  };
}

export default connect(mapStateToProps)(PromoBannerContainer);
