import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { PokemonDetails } from './screens/PokemonDetaiils';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetails: {
    headerTitle: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Pokemons', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={({ route }) => ({ title: route.params.headerTitle })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
