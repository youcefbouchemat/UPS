import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarButton from './TabBarButton';

import Orders from '../Screens/Orders';
import Customers from '../Screens/Customers';
import colors from '../../assets/colors';

const bottomBars = [
  {
    route: 'Customers',
    label: 'Customers',
    type: 'material',
    icon: 'groups',
    color: colors.primaryGreen,
    component: Customers,
  },

  {
    route: 'Orders',
    label: 'Orders',
    type: 'entypo',
    icon: 'box',
    color: colors.primaryPink,
    component: Orders,
  },
];

const BottomNavBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
      }}>
      {bottomBars.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarLabel: item.label,
              tabBarButton: props => (
                <TabBarButton {...props} item={item} index={index} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({});
