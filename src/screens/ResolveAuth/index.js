import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  autoLogin
} from '../Login/redux/actions';

const ResolveAuthScreen = ({ autoLogin }) => {
  useEffect(() => {
    autoLogin();
  }, []);

  return null;
}

ResolveAuthScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const mapStateToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  {
    autoLogin
  }
)(ResolveAuthScreen);