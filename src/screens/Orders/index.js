import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
//Custom
import Card, { Body, Footer } from '../../components/Card';
import { mainStyles, colors } from '../../constants/styles';
//Actions
import {
  getOrders
} from './redux/actions'

const OrdersScreen = (props) => {
  useEffect(() => {
    props.getOrders();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mis Órdenes</Text>

        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={props.orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => props.navigation.navigate('Order', { id: item.id })}>
                  <Card>
                    <Body
                      image={<Image source={{ uri: item.place.imageUrl }} style={styles.placeImage} />}
                      imagePosition="left"
                      subBody={
                        <View>
                          {
                            item.products.map((product, i) => (
                              <ListItem
                                key={i}
                                title={product.name}
                                subtitle={`$${product.price}`}
                                containerStyle={{ paddingHorizontal: 0, paddingVertical: 5 }}
                              />
                            ))
                          }
                        </View>
                      }
                    >

                      <View style={styles.order}>
                        <Text style={styles.orderTitle}>{item.place.name}</Text>
                        <Text style={styles.orderDate}>
                          {moment(item.date).format('DD/MM/YYYY, hh:mm a')}
                        </Text>
                      </View>
                    </Body>

                    <Footer>
                      <View style={styles.actions}>
                        <Text style={styles.total}>${item.total}</Text>
                        <Button
                          icon={
                            <Icon
                              name="comment"
                              size={15}
                              color={colors.orange}
                              style={{ marginRight: 5 }}
                            />
                          }
                          raised
                          titleStyle={{ color: colors.orange }}
                          buttonStyle={{ padding: 0 }}
                          title="Opinar"
                          type="clear"
                        />
                      </View>
                    </Footer>
                  </Card>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ...mainStyles,
  placeImage: {
    borderRadius: 5,
    width: 50,
    height: 50
  },
  order: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  orderDate: {
    color: colors.darkGrey
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  total: { 
    fontWeight: 'bold'
  }
});

const mapStateToProps = ({ ordersRedux }) => {
  const { orders, ordersLoading } = ordersRedux;
  return {
    orders: orders,
    loading: ordersLoading
  }
}

export default connect(
  mapStateToProps,
  {
    getOrders
  }
)(OrdersScreen);