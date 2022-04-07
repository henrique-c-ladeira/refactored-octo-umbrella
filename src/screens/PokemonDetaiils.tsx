import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { RootStackParamList } from '../Routes';
import { useGetPokemonDetailsQuery } from '../services/pokemonApi';

type PokemonDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonDetails'
>;

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ route }) => {
  const pokemonName = route.params.headerTitle;
  const { data, isError, isFetching, isSuccess } =
    useGetPokemonDetailsQuery(pokemonName);

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.screenContainer}>
      {isFetching && <ActivityIndicator />}

      {isSuccess && (
        <>
          <Image source={{ uri: data.imageUrl }} style={styles.image} />
          <Text>Type</Text>
          {data.types.map(item => (
            <Text>{item}</Text>
          ))}
          <Text>Stats</Text>
          {data.stats.map(item => (
            <>
              <Text>{item.name}</Text>
              <Text>{item.value}</Text>
            </>
          ))}
        </>
      )}

      {isError && <Text>Something unnexpected's happenned. </Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
  },
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: '100%', height: 240, resizeMode: 'contain' },
});
