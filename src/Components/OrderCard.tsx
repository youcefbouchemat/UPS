import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import colors from '../../assets/colors';
import {Icon} from '@rneui/themed';
import MapView, {Marker} from 'react-native-maps';
import {Skeleton} from '@rneui/themed';

const OrderCard = props => {
  const tw = useTailwind();
  const data = props.data.length > 0 ? props.data[0][1] : null;
  const items = props.items;

  if (!data) {
    return (
      <View style={styles.skeletonContainer}>
        <Skeleton width="100%" height={250} skeletonStyle={styles.sketlon} />
        <View style={{height: 20}}></View>
        <Skeleton width="100%" height={250} skeletonStyle={styles.sketlon} />
        <View style={{height: 20}}></View>
        <Skeleton width="100%" height={250} skeletonStyle={styles.sketlon} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Icon name="box" type="entypo" color={colors.white} size={50} />
        <Text style={styles.smallBoldText}>
          {data?.carrier.toUpperCase()} : {data?.trackingId.toUpperCase()}
        </Text>
        <Text style={styles.deliveryDateText}>
          Expected Delivery : {data?.createdAt}
        </Text>

        <View style={styles.adressContainer}>
          <Text style={styles.boldText}>Address</Text>
          <Text style={styles.regularText}>
            {data?.Address}, {data?.City}
          </Text>
          <Text style={styles.regularText}>
            Shipping cost ${data?.shippingCost}
          </Text>
        </View>
        <View style={styles.divider}></View>

        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{width: '100%'}}
          data={items}
          renderItem={({index, item}) => {
            return (
              <View key={index} style={styles.flatlistContainer}>
                <Text style={styles.semiBoldText}>{item.name}</Text>
                <Text style={styles.semiBoldText}>x{item.quantity}</Text>
              </View>
            );
          }}
          key={item => item.item_id}
        />
      </View>
      <MapView
        initialRegion={{
          latitude: data?.Lat,
          longitude: data?.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{height: 150, width: '100%'}}>
        {data.Lat && data?.Lng && (
          <Marker
            key={1}
            coordinate={{latitude: data?.Lat, longitude: data?.Lng}}
            title={data?.Address}
            description={data?.City}
            identifier="origin"
            pinColor={colors.primaryGreen}
          />
        )}
      </MapView>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  secondContainer: {padding: 20, alignItems: 'center'},
  adressContainer: {alignItems: 'center', paddingVertical: 20},
  divider: {
    backgroundColor: colors.white,
    height: 0.5,
    width: '100%',
    marginBottom: 20,
  },
  flatlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skeletonContainer: {padding: 20, borderRadius: 20},
  sketlon: {backgroundColor: colors.sketelonbg},
  smallBoldText: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 12,
    color: colors.white,
  },
  boldText: {fontFamily: 'NunitoSans-Bold', fontSize: 15, color: colors.white},
  regularText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 15,
    color: colors.white,
  },
  semiBoldText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 15,
    color: colors.white,
  },
  deliveryDateText: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 17,
    color: colors.white,
  },
});
