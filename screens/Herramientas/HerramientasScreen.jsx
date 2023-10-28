import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

const HerramientasScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Herramientas</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("CalculadoraEmbarazoScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Calculadora de embarazo
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
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
  },
  button: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F687B3",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default HerramientasScreen;
