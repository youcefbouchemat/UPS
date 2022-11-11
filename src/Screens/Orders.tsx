import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/colors';
import axios from 'axios';
import {axiosInstance} from '../../config/axios';
import OrderItemCard from '../Components/OrderItemCard';

const Orders = () => {
  const navigation = useNavigation();

  const [buttonClicked, setButtonClicked] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    axiosInstance
      .get('orders.json', {cancelToken: signal.token})
      .then(response => {
        const entries = Object.entries(response.data);
        setOrders(entries);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('cancel get orders from axios');
        } else {
          console.log(error.response);
        }
      });
    return () => {
      signal.cancel();
    };
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: 'https://links.papareact.com/m51'}}
        style={styles.imageHeader}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setButtonClicked(!buttonClicked)}>
        <Text style={styles.butonText}>
          Showing : {buttonClicked ? 'Oldest First' : 'Most Recent First'}
        </Text>
      </TouchableOpacity>

      {/* Body */}
      {orders
        .sort((a, b) => {
          if (buttonClicked) {
            return new Date(a[1].createdAt) > new Date(b[1].createdAt) ? 1 : -1;
          } else {
            return new Date(a[1].createdAt) < new Date(b[1].createdAt) ? 1 : -1;
          }
        })
        .map(order => {
          return <OrderItemCard key={order[1].trackingId} item={order[1]} />;
        })}
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primaryPink},
  imageHeader: {height: 200},
  buttonContainer: {
    backgroundColor: 'pink',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: -20,
    padding: 10,
    borderRadius: 5,
  },
  butonText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 17,
    color: colors.darkGray,
  },
});
