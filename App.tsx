import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import RootApp from './RootApp';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <RootApp />
    </TailwindProvider>
  );
};

export default App;
