import {View, Text} from 'react-native';
import React from 'react';

import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-black flex-1')}>
      <Text style={tailwind('text-blue-600')}>Hello world</Text>
    </View>
  );
};

export default Home;
