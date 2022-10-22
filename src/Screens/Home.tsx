import {View, Text} from 'react-native';
import React from 'react';

import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Text style={tailwind('text-red-600 font-mono')}>Hello world</Text>
    </View>
  );
};

export default Home;
