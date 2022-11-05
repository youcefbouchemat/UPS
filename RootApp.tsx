import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavBar from './src/Components/BottomNavBar';
import ModalScreen from './src/Screens/ModalScreen';

const RootApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="BottomNavBar"
            component={BottomNavBar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ModalScreen"
            component={ModalScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
