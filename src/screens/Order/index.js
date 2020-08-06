import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';
import { Divider, ListItem } from 'react-native-elements';
import moment from 'moment';
import { IconButton } from 'react-native-paper';
//Custom
import { mainStyles, colors } from '../../constants/styles';
//Actions
import {
  getOrder
} from './redux/actions'

const OrderScreen = (props) => {
  const { order, route } = props;
  const { id } = route.params;

  useEffect(() => {
    props.getOrder(id);
  }, []);

  return (
    <>
      <View style={{ flex: 1, paddingTop: 20, paddingBottom: 30, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            icon="arrow-left"
            onPress={() => props.navigation.navigate('Orders')}
            color={colors.orange}
          />

          <Text style={styles.title}>Mis Órdenes</Text>
        </View>

        {
          order
          &&
          <View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>{order.place.name}</Text>
            </View> 

            <View style={{ padding: 20 }}>
              {
                order.products.map((product, i) => (
                  <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <View style={{ marginRight: 20 }}>
                      <Text>{product.cant}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <ListItem
                        key={i}
                        title={product.name}
                        subtitle={`$${product.price}`}
                        containerStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}
                      />
                    </View>

                    <View style={{ marginLeft: 20 }}>
                      <Text>${(product.cant * product.price)}</Text>
                    </View>
                  </View>
                ))
              }
            </View>

            {
              order.notes
              &&
              <View style={{ padding: 20 }}>
                <Text style={{ marginBottom: 5, color: colors.darkGrey, fontWeight: 'bold' }}>Notes</Text>
                <View style={{ backgroundColor: colors.liteGrey, padding: 8, borderRadius: 5 }}>
                  <Text>{order.notes}</Text>
                </View>
              </View>
            }

            <Divider style={styles.divider} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
              <Text style={{ fontSize: 22 }}>Total</Text>
              <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>${order.total}</Text>
              </View>
            </View>

            <Divider style={styles.divider} />

            <View style={{ padding: 20 }}>
              <Text style={{ marginBottom: 5, color: colors.darkGrey, fontWeight: 'bold' }}>Dirección</Text>
              <View style={{ backgroundColor: colors.liteGrey, padding: 8, borderRadius: 5 }}>
                <Text>{`${order.address.name}: ${order.address.address}, ${order.address.city.name}`}</Text>
              </View>
            </View>
          </View>
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
});

const mapStateToProps = ({ orderRedux }) => {
  const { order, orderLoading } = orderRedux;
  return {
    order: order,
    loading: orderLoading
  }
}

export default connect(
  mapStateToProps,
  {
    getOrder
  }
)(OrderScreen);