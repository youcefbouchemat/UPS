import {InteractionManager, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements';
import TabBarButton from './TabBarButton';

import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Add from '../Screens/Add';
import Like from '../Screens/Like';
import Account from '../Screens/Account';

const bottomBars = [
  {
    route: 'Home',
    label: 'Home',
    type: 'octicon',
    icon: 'home',
    component: Home,
  },
  {
    route: 'Search',
    label: 'Search',
    type: 'antdesign',
    icon: 'search1',
    component: Search,
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
