import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Home } from './screens/Home';
import { PokemonDetails } from './screens/PokemonDetails';
import { PokemonTransformedResponse } from './services/pokemonApi/types/getPokemonList';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetails: {
    pokemon: PokemonTransformedResponse;
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
        options={({ route }) => ({ title: route.params.pokemon.name })}
        sharedElements={(route, _otherRoute, _showing) => {
          const { name } = route.params.pokemon;
          return [
            {
              id: name,
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
