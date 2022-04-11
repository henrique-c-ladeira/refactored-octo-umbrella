import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { RootStackParamList } from '../Routes';
import { useGetPokemonDetailsQuery } from '../services/pokemonApi';

type PokemonDetailsProps = StackScreenProps<
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
      {isFetching && (
        <SharedElement id={pokemonName}>
          <ActivityIndicator style={styles.image} />
        </SharedElement>
      )}

      {isSuccess && (
        <>
          <SharedElement id={pokemonName}>
            <ImageBackground
              source={{ uri: data.imageUrl }}
              style={styles.image}
              imageStyle={styles.image}
            />
          </SharedElement>
          <Text style={styles.text}>Type</Text>
          {data.types.map(item => (
            <Text style={styles.text}>{item}</Text>
          ))}
          <Text style={styles.text}>Stats</Text>
          {data.stats.map(item => (
            <>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.value}</Text>
            </>
          ))}
        </>
      )}

      {isError && (
        <Text style={styles.text}>Something unnexpected's happenned. </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {},
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: 240, height: 240, resizeMode: 'contain' },
  text: {
    color: 'black',
  },
});
