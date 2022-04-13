import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

type ListItemProps = {
  item: {
    name: string;
    spriteUrl: string;
  };
  onPress: () => void;
};

export class ListItem extends PureComponent<ListItemProps> {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <SharedElement id={item.name}>
          <Image style={styles.image} source={{ uri: item.spriteUrl }} />
        </SharedElement>
        <Text style={styles.pokemonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000010',
  },
  pokemonText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
    textTransform: 'capitalize',
    color: 'black',
  },
  image: {
    marginLeft: 10,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
