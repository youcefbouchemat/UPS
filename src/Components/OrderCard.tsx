import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import colors from '../../assets/colors';
import {Icon} from '@rneui/themed';

const OrderCard = props => {
  const tw = useTailwind();
  const data = props.data.length > 0 ? props.data[0][1] : null;
  const items = props.items;

  return (
    <View style={styles.container}>
      <Icon name="box" type="entypo" color={colors.white} size={50} />
      <Text>
        {data?.carrier.toUpperCase()} : {data?.trackingId.toUpperCase()}
      </Text>
      <Text>Expected Delivery : {data?.createdAt}</Text>

      <View style={styles.adressContainer}>
        <Text>Address</Text>
        <Text>
          {data?.Address}, {data?.City}
        </Text>
        <Text>Shipping cost ${data?.shippingCost}</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{width: '100%'}}
        data={items}
        renderItem={({index, item}) => {
          return (
            <View key={index} style={styles.flatlistContainer}>
              <Text>{item.name}</Text>
              <Text>x{item.quantity}</Text>
            </View>
          );
        }}
        key={item => item.item_id}
      />
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    padding: 20,
  },
  adressContainer: {alignItems: 'center', paddingVertical: 20},
  flatlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
