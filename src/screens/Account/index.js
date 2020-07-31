import React from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { mainStyles, colors } from '../../constants/styles';
import { logout } from '../Login/redux/actions';
import { List, IconButton } from 'react-native-paper';

const AccountScreen = ({ navigation, user, logout }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mi Cuenta</Text>

        <View style={styles.infoContainer}>
          <Text style={{ fontSize: 18 }}>{user && `${user.name} ${user.lastname}`}</Text>
          <Text style={{ fontSize: 14 }}>{user && `${user.phone}`}</Text>
          <Text style={{ fontSize: 14 }}>{user && `${user.email}`}</Text>
        </View>

        <List.Section
          style={{
            marginTop: 18,
            marginBottom: 0,
            paddingLeft: 0,
            borderBottomWidth: 1,
            borderBottomColor: colors.grey,
            borderTopWidth: 1,
            borderTopColor: colors.grey
          }}
        >
          <List.Subheader
            style={{ paddingLeft: 0 }}
          >
            Mis Direcciones
          </List.Subheader>

          {(user && user.addresses)
            &&
            user.addresses.map((address) => {
              return (
                <List.Item
                  key={address.name}
                  title={address.name}
                  description={address.city}
                  style={{ paddingLeft: 0 }}
                  right={props => {
                    return (
                      <View style={{ flexDirection: "row" }}>
                        <IconButton
                          icon="delete"
                          {...props}
                          onPress={() => console.log('Pressed')}
                        />
                      </View>
                    )
                  }}
                />
              )
            })
          }

          <List.Item
            title=""
            description=""
            style={{ paddingLeft: 0 }}
            right={props => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <IconButton
                    icon="plus"
                    {...props}
                    onPress={() => console.log('Pressed')}
                  />
                </View>
              )
            }}
          />
        </List.Section>

        <List.Section
          style={{
            paddingLeft: 0,
            marginTop: 0
          }}
        >
          <List.Subheader
            style={{ paddingLeft: 0 }}
          >
            Opciones
          </List.Subheader>

          <List.Item
            title="Editar cuenta"
            style={{ paddingLeft: 0 }}
            onPress={() => { }}
            left={props => <List.Icon {...props} icon="pencil" />}
          />

          <List.Item
            title="Cerrar sesión"
            style={{ paddingLeft: 0 }}
            onPress={logout}
            left={props => <List.Icon {...props} icon="logout" />}
          />
        </List.Section>



      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
  infoContainer: {
    marginTop: 20,
  }
});

const mapStateToProps = ({ authRedux }) => {
  const { user } = authRedux;
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  {
    logout
  }
)(AccountScreen);