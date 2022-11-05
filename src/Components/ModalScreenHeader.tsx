import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/colors';

const ModalScreenHeader = props => {
  const tw = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={(tw('bg-black'), styles.conatiner)}>
      <View style={styles.cancelIconConatiner}>
        <Icon
          name="cancel"
          type="material"
          size={25}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.cancelIcon}
        />
      </View>
      <Text style={styles.textName}>{props.name}</Text>
      <Text style={styles.textDeliveries}>Deliveries</Text>
    </View>
  );
};

export default ModalScreenHeader;

const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryGreen,
  },
  textName: {
    fontFamily: 'NunitoSans-Bold',
    color: colors.primaryGreen,
    fontSize: 20,
  },
  textDeliveries: {
    fontFamily: 'NunitoSans-Italic',
    color: colors.accent,
    fontSize: 15,
  },
  cancelIconConatiner: {position: 'absolute', top: 10, right: 10},
});
