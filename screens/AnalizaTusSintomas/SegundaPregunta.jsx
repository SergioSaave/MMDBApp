import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SegundaPregunta = ({ navigation, route }) => {
  let pregunta1 = route.params.pregunta1;

  return (
    <View>
      <Text>SegundaPregunta</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ThirdQuestion");
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

export default SegundaPregunta;
