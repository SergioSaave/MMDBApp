import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const PreguntaleAlExperto = ({navigation}) => {
    const imageUrl =
      "/Users/sergiosaavedra/workspace/MMDBApp/assets/images/pediatria.jpg";

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Preguntale al experto</Text>
        <Image source={{ uri: imageUrl }}  style={styles.imagenPortada} />

        <Text style={styles.subTitle}>Agenda tu hora</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Agenda tu hora
          </Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Analiza tus sintomas</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate("FirstQuestion");
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Analiza tus sintomas
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  subcontainer: {
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  subTitle: {
    // fontSize: 18,
    marginTop: 20,
  },
  imagenPortada: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
  },
  button: {
    marginTop: 10,
    // padding: 20,
    color: "#fff",
    backgroundColor: "#EC407A",
    borderRadius: 20,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PreguntaleAlExperto;
