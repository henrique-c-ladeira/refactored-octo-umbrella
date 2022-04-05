import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { fetchPokemonList } from '../services/fetchPokemonList';

export const Home = () => {
  const response = useQuery('pokemonList', fetchPokemonList);

  console.tron.log!(response);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Pokemons </Text>

      {response.isFetching && <ActivityIndicator />}

      {response.isSuccess &&
        response.data.map(item => (
          <View key={item}>
            <Text style={styles.pokemonText}>{item}</Text>
          </View>
        ))}

      {response.isError && <Text>Something unnexpected's happenned.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 10 },
  pokemonText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
    textTransform: 'capitalize',
    alignSelf: 'flex-start',
  },
});
