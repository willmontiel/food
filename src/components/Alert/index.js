import React from 'react';
//Redux
import { connect } from "react-redux";
//Components
import AwesomeAlert from 'react-native-awesome-alerts';
//Custom
import { colors } from '../../constants/styles';
import {
  showAlert
} from '../../redux/common/actions';

const Alert = ({ showAlert, alert }) => {
  return (
    <AwesomeAlert
      useNativeDriver={true}
      contentContainerStyle={{ width: "100%"}}
      contentStyle={{ alignSelf: 'flex-start', padding: 8}}

      titleStyle={{fontSize: 18,  alignSelf: 'flex-start', paddingLeft: 0, paddingTop: 0}}
      messageStyle={{fontSize: 16, alignSelf: 'flex-start'}}

      actionContainerStyle={{ alignSelf: 'flex-end'}}
      cancelButtonStyle={{ backgroundColor: 'transparent' }}
      cancelButtonTextStyle={{ color: 'black' }}
      confirmButtonStyle={{ backgroundColor: colors.orange }}
      confirmButtonTextStyle={{}}
      
      show={alert ? true : false}
      showProgress={false}
      title={alert && alert.title || ""}
      message={alert && alert.message || ""}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={alert && alert.confirmText ? true : false}
      confirmText={alert && alert.confirmText}
      cancelText={alert && alert.cancelText}
      confirmButtonColor="#2C3940"
      onCancelPressed={() => {
        showAlert(false);
      }}
      onConfirmPressed={() => {

      }}
    />
  )
}

const mapStateToProps = ({ commonRedux }) => {
  const { alert } = commonRedux;
  return { alert };
};

export default connect(
  mapStateToProps,
  {
    showAlert
  }
)(Alert);