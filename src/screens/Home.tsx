import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ListItem } from '../components/ListItem';
import { useGetPokemonListQuery } from '../services/pokemonApi/pokemonApi';

export const Home = () => {
  const response = useGetPokemonListQuery(400);

  console.tron.log!({ response });

  return (
    <View style={styles.screen}>
      {response.isFetching && <ActivityIndicator />}

      {response.isSuccess && (
        <FlatList
          style={styles.pokemonListContainer}
          data={response.data.results.map(item => item.name)}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      )}

      {response.isError && (
        <Text>Something unnexpected's happenned. {response.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { justifyContent: 'center', alignItems: 'center' },
  pokemonListContainer: { width: '100%' },
});
