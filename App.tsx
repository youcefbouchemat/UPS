import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import RootApp from './RootApp';
import utilities from './tailwind.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <TailwindProvider utilities={utilities}>
        <RootApp />
      </TailwindProvider>
    </SafeAreaProvider>
  );
};

export default App;
