import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const HerramientasScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Herramientas</Text>
        <Text style={styles.content}>
          A continuación puedes elegir entre alguna de las herramientas de Mi
          Manual del Bebe
        </Text>
        <TouchableOpacity
          style={styles.buttonEmbarazo}
          onPress={() => {
            navigation.navigate("CalculadoraEmbarazoScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Calculadora de Embarazo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOvulacion}
          onPress={() => {
            navigation.navigate("CalculadoraOvulacionScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Calculadora de Ovulacion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLibroChile}
          onPress={() =>
            Linking.openURL(
              "https://mimanualdelbebe.com/libro-digital-chile/cuarta-edicion/"
            )
          }
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Libro virtual Chile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLibroColombia}
          onPress={() =>
            Linking.openURL(
              "https://mimanualdelbebe.com/libro-digital-colombia/decimocuarta-edicion/"
            )
          }
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Libro virtual Colombia
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
    marginTop: 20,
  },
  content: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "justify",
    marginBottom: 20,
  },
  buttonEmbarazo: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    backgroundColor: "#F687B3",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonOvulacion: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    backgroundColor: "#CC99FF",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonLibroChile: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    backgroundColor: "#FF6666",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonLibroColombia: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    backgroundColor: "#FF9933",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default HerramientasScreen;
