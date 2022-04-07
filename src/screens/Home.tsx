import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ListItem } from '../components/ListItem';
import { RootStackParamList } from '../Routes';
import { useGetPokemonListQuery } from '../services/pokemonApi';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const response = useGetPokemonListQuery(400);

  console.tron.log!({ response });

  return (
    <View style={styles.screen}>
      {response.isFetching && <ActivityIndicator />}

      {response.isSuccess && (
        <FlatList
          style={styles.pokemonListContainer}
          data={response.data}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                navigation.navigate('PokemonDetails', { headerTitle: item })
              }
              item={item}
            />
          )}
        />
      )}

      {response.isError && <Text>Something unnexpected's happenned.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { justifyContent: 'center', alignItems: 'center' },
  pokemonListContainer: { width: '100%' },
});
