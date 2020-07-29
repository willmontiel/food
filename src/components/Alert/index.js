import React, { useState } from 'react';
import {
  Dimensions,
} from 'react-native';
//Redux
import { connect } from "react-redux";
import AwesomeAlert from 'react-native-awesome-alerts';

import {
  showAlert
} from '../../redux/common/actions';

const Alert = ({ alert }) => {
  return (
    <AwesomeAlert
      overlayStyle={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height + 100 }}
      show={alert ? true : false}
      //showProgress={false}
      title={alert && alert.title || ""}
      message={alert && alert.message || ""}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      cancelText={alert && alert.cancelText}
      confirmButtonColor="#2C3940"
      cancelButtonColor="#2C3940"
      onCancelPressed={() => {
        this.showAlert(false);
      }}
      onConfirmPressed={() => {

      }}
    />
  )
}

const mapStateToProps = ({ commonRedux }) => {
  const { alert } = commonRedux;
  return { alert: alert };
};

export default connect(
  mapStateToProps,
  {
    showAlert
  }
)(Alert);