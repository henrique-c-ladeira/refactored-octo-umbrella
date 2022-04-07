import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { RootStackParamList } from '../Routes';

type PokemonDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonDetails'
>;

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  return (
    <>
      <Text style={{ color: 'black' }}>TODO</Text>
    </>
  );
};
