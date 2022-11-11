import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import ModalScreenHeader from '../Components/ModalScreenHeader';
import axios from 'axios';
import {axiosInstance} from '../../config/axios';
import OrderCard from '../Components/OrderCard';

const ModalScreen = ({route}) => {
  const tw = useTailwind();
  const items = route.params.items;
  const name = route.params.name;

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
    <SafeAreaView style={tw('flex-1')}>
      {/* Header */}
      <ModalScreenHeader name={name} />

      {/* Body */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={item => {
          const result = orders.filter(order =>
            order[1].trackingId.includes(item.item[0]),
          );
          // console.log(item.item[1].items);

          return <OrderCard data={result} items={item.item[1].items} />;
        }}
        key={item => item.item[0]}
      />
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
