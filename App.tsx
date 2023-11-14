import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ProductsStackNavigator} from './src/navigator/ProductsStackNavigator';

let App = () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator />
    </NavigationContainer>
  );
};

export default App;
