import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/colors';

const Customers = () => {
  const [searchCustomer, setSearchCustomer] = useState('');
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
    </ScrollView>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.primaryGreen}`,
    alignItems: 'center',
  },
  imageHeader: {height: '25%', width: '100%'},
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
