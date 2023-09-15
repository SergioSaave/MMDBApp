import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Manual del Bebe</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  }
})

export default HomeScreen;
