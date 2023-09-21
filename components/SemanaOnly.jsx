import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import SemanaItem from "./SemanaItem";
import { ScrollView } from "react-native-gesture-handler";

const SemanaOnly = ({ navigation, route }) => {
  let semana = route.params.semana;

  const renderItem = ({ item }) => {
    return <SemanaItem semana={item} />;
  };

  return (
    // <FlatList
    //   data={semana}
    //   renderItem={() => {
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.titulo}>{semana.titulo}</Text>
          <Image source={{ uri: semana.imagen }} style={styles.imagen} />

          <Text style={styles.descripcion}>{semana.descripcion}</Text>

          <View style={styles.buttonBack}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  subcontainer: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  descripcion: {
    // fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  imagen: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonBack: {
    padding: 10,
    backgroundColor: "#F687B3",
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default SemanaOnly;
