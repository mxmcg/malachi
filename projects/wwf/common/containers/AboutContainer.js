import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import About from '../../components/About/components.jsx';

// include actions as they are needed by each component
// they are called via dispatch()

const propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.object
};

// in here, we determine the props to be passed down to the specific component needed
class AboutContainer extends Component {

  render () {
    return (
      <About {...this.props} />
    );
  }
}

AboutContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const componentContent = state.content.project.components.AboutContainer;
  return {
    componentContent
  };
}

export default connect(mapStateToProps)(AboutContainer);
