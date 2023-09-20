import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const Pregunta = (props) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SecondQuestion");
        }}
      >
        <Text>{props.nombre}</Text>
        <Image
          source={{ uri: props.imagen }}
          style={styles.imagenPortada}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  subcontainer: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  subTitle: {
    marginTop: 20,
  },
  imagenPortada: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
  },
  card: {
    backgroundColor: "#ccc",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default Pregunta;
