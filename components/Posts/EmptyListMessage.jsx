import { StyleSheet, Text } from 'react-native'
import React from 'react'

const EmptyListMessage = () => {
  return (
    // Flat List Item
    <Text
      style={styles.emptyListStyle}
      onPress={() => getItem(item)}>
      Comprueba tu conexion a internet y reintente...
    </Text>
  )
}

const styles = StyleSheet.create({
    emptyListStyle: {
      padding: 10,
      fontSize: 18,
      textAlign: 'center',
    },
  });

export default EmptyListMessage