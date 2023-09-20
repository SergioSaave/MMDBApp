import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TerceraPregunta = ({ navigation }) => {
  return (
    <View>
      <Text>Tercera Pregunta</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Result");
        }}
      >
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
          Agenda tu hora
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
          Volver
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TerceraPregunta;
