import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";

const categorias = [
  {
    nombre: "Embarazo",
    imagen:
      "/Users/sergiosaavedra/workspace/MMDBApp/assets/images/embarazo.webp",
  },
  {
    nombre: "Bebe",
    imagen: "/Users/sergiosaavedra/workspace/MMDBApp/assets/images/bebe.webp",
  },
  {
    nombre: "Mamá Postparto",
    imagen:
      "/Users/sergiosaavedra/workspace/MMDBApp/assets/images/postparto.jpeg",
  },
];

const PrimeraPregunta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.top}>
          <Text style={styles.title}>Agenda el tipo de consulta</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.back}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Atras</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categorias}
          renderItem={(pregunta) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SecondQuestion", {
                    pregunta1: pregunta.item.nombre,
                  });
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  {pregunta.item.nombre}
                </Text>
                <Image
                  source={{ uri: pregunta.item.imagen }}
                  style={styles.imagen}
                />
              </TouchableOpacity>
            </View>
          )}
        />
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
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    marginTop: 20,
  },
  imagen: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  back: {
    backgroundColor: "#EC407A",
    padding: 7,
    borderRadius: 10,
  },
});

export default PrimeraPregunta;
