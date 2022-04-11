import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Home } from './screens/Home';
import { PokemonDetails } from './screens/PokemonDetaiils';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetails: {
    headerTitle: string;
  };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Pokemons', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={({ route }) => ({ title: route.params.headerTitle })}
        sharedElements={(route, _otherRoute, _showing) => {
          const { headerTitle } = route.params;
          return [
            {
              id: headerTitle,
              animation: 'fade',
              // resize: 'clip'
              // align: ''left-top'
            },
          ];
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
