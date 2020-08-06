import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { mainStyles, colors } from '../../constants/styles';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
//Custom
import Card, { Body, Footer } from '../../components/Card';

const orders = [
  {
    id: 1,
    place: {
      id: 1,
      name: "Fritanga Doña Mary",
      imageUrl: "https://www.santanderalextremo.com/wp-content/uploads/2019/05/fritanga-giron.jpg"
    },
    date: "2020-08-05 14:00:00",
    products: [{
      id: 1,
      name: 'Empanadas x 6',
      price: 4500,
      cant: 1
    }],
    status: "Entregado",
    total: 4500
  },
  {
    id: 2,
    place: {
      id: 1,
      name: "Panadería Tahona",
      imageUrl: "https://portal.minervafoods.com/files/styles/blog_post_page/public/carne_com_refrigerante_-_blog.jpg?itok=KHH-4Lrf"
    },
    date: "2020-08-04 08:00:00",
    products: [
      {
        id: 3,
        name: 'Buñuelos x 6',
        price: 2500,
        cant: 2
      },
      {
        id: 3,
        name: 'Buñuelos x 6',
        price: 2500,
        cant: 2
      }
    ],
    status: "Entregado",
    total: 5000
  }
]

const OrdersScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Mis Órdenes</Text>

        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => console.log("Hi!")}>
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

export default OrdersScreen;