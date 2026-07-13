import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemsScreen from './screens/ItemsScreen';
import DetailScreen from './screens/DetailScreen';
import FormScreen from './screens/FormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Items" component={ItemsScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
