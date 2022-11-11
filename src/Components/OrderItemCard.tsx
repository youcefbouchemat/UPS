import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {Icon} from '@rneui/themed';

const OrderItemCard = props => {
  const item = props.item;
  return (
    <View style={styles.container}>
      <View>
        <Icon
          name="truck-delivery"
          type="material-community"
          color={colors.primaryPink}
          size={25}
        />
        <Text style={styles.dateText}>
          {new Date(item.createdAt).toDateString()}
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.idText}>
          {item.carrier} : {item.trackingId}
        </Text>
        <Text style={styles.adressText}>{item.Address}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.shippingText}>{item.shippingCost} x</Text>
        <Icon name="box" type="feather" color={colors.black} size={30} />
      </View>
    </View>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    color: colors.black,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 10,
  },
  shippingText: {
    color: colors.primaryPink,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 13,
    marginRight: 5,
  },
  idText: {
    color: colors.sketelonbg,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 11,
  },
  adressText: {
    color: colors.darkGray,
    fontFamily: 'NunitoSans-Bold',
    fontSize: 17,
  },
});
