import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.description}>
          Si ya tienes una cuenta registrada, puedes{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.link}>iniciar sesion aqui!</Text>
        </TouchableOpacity>

        <View style={styles.campos}>
          <Text>Nombre:</Text>
          <TextInput style={styles.input} placeholder="Ingresa tu correo" />
        </View>

        <View style={styles.campos}>
          <Text>Correo:</Text>
          <TextInput style={styles.input} placeholder="Ingresa tu correo" />
        </View>

        <View style={styles.campos}>
          <Text>Contraseña:</Text>
          <TextInput style={styles.input} placeholder="Ingresa tu correo" />
        </View>

        <TouchableOpacity style={styles.buttonSignIn}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Inicia Sesion
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
    alignItems: "left",
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#F687B3",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    fontSize: 15,
    color: "#FDA402",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 2,
  },
  campos: {
    // padding: 10,
    marginTop: 10,
    width: "100%",
    gap: 20,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#CBD5E1",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonSignIn: {
    marginTop: 20,
    // padding: 20,
    color: "#fff",
    backgroundColor: "#F687B3",
    borderRadius: 20,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;
