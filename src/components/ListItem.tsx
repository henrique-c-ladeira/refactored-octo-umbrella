import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

type ListItemProps = {
  item: string;
};

export class ListItem extends PureComponent<ListItemProps> {
  render() {
    const { item } = this.props;
    return <Text style={styles.pokemonText}>{item}</Text>;
  }
}

const styles = StyleSheet.create({
  pokemonText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
    textTransform: 'capitalize',
    alignSelf: 'flex-start',
  },
});
