import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ListItemProps = {
  item: string;
  onPress: () => void;
};

export class ListItem extends PureComponent<ListItemProps> {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.pokemonText}>{item}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pokemonText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
    textTransform: 'capitalize',
    alignSelf: 'flex-start',
    color: 'black',
  },
});
