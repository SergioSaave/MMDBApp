import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ResultadoAnalizaTusSintomas = ({ navigation }) => {
  return (
    <View>
      <Text>ResultadoAnalizaTusSintomas</Text>

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

export default ResultadoAnalizaTusSintomas;
