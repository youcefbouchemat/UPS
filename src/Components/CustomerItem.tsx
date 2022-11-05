import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const CustomerItem = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ModalScreen', {
          name: props.data.name,
          items: props.items,
        })
      }>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={styles.textName}>{props.data.name}</Text>
          <Text style={styles.textID}>ID : {props.id}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={styles.textID}>{props.items.length}x</Text>
          <Icon
            name="box"
            type="entypo"
            size={50}
            color={colors.primaryGreen}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.gray,
          height: 1,
          marginVertical: 15,
        }}></View>

      <Text style={styles.textemail}>{props.data.email}</Text>
    </TouchableOpacity>
  );
};

export default CustomerItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 16,
    borderRadius: 10,
    width: '90%',
    maxWidth: 500,
  },
  textName: {color: 'black', fontSize: 24, fontFamily: 'NunitoSans-Black'},
  textID: {
    color: colors.primaryGreen,
    fontSize: 15,
    fontFamily: 'NunitoSans-SemiBold',
  },
  textemail: {color: 'black', fontSize: 15, fontFamily: 'NunitoSans-SemiBold'},
});
