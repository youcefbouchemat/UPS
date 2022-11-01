import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors';
import axios from 'axios';
import {axiosInstance} from '../../config/axios';
import CustomerItem from '../Components/CustomerItem';
import {countItemPerCustomer} from '../Functions/countItemPerCustomer';

const Customers = () => {
  const [searchCustomer, setSearchCustomer] = useState('');

  const [customers, setCustomers] = useState([]);
  const [trackedItems, setTrackedItems] = useState([]);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    axiosInstance
      .get('customers.json', {cancelToken: signal.token})
      .then(response => {
        const entries = Object.entries(response.data);
        setCustomers(entries);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('cancel from axios');
        } else {
          console.log(error.response);
        }
      });
    return () => {
      signal.cancel();
    };
  }, []);

  useEffect(() => {
    const signal = axios.CancelToken.source();
    axiosInstance
      .get('trackingItems.json', {cancelToken: signal.token})
      .then(response => {
        const entries = Object.entries(response.data);
        setTrackedItems(entries);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('cancel from axios');
        } else {
          console.log(error.response);
        }
      });
    return () => {
      signal.cancel();
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: 'https://i.imgur.com/uU8GTZM.jpeg'}}
        style={styles.imageHeader}
        resizeMode="contain"
      />
      <View style={styles.searchBarContainer}>
        <TextInput
          value={searchCustomer}
          onChangeText={text => setSearchCustomer(text)}
          placeholderTextColor={colors.light}
          placeholder="Search by Customer"
          style={styles.searchBatInput}
        />
      </View>
      {/* body */}
      {customers.map(item => {
        const result = countItemPerCustomer(item[0], trackedItems);
        return (
          <CustomerItem
            key={item[0]}
            id={item[0]}
            number={result}
            data={item[1]}
          />
        );
      })}
    </ScrollView>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: `${colors.primaryGreen}`,
    alignItems: 'center',
    paddingBottom: 120,
  },
  imageHeader: {height: 200, width: '100%'},
  searchBarContainer: {
    width: '100%',
    backgroundColor: colors.light,
    padding: 20,
  },
  searchBatInput: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 10,
    padding: 16,
    color: colors.light,
    fontSize: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
