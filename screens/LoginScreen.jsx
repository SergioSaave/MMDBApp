import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Inicia Sesión</Text>
        <Text style={styles.description}>
          Si no tienes una cuenta registrada, puedes{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.link}>registrarte aqui!</Text>
        </TouchableOpacity>

        <View style={styles.campos}>
          <Text style={{ fontWeight: "bold" }}>Correo:</Text>
          <TextInput style={styles.input} placeholder="Ingresa tu correo" />
        </View>

        <View style={styles.campos}>
          <Text style={{ fontWeight: "bold" }}>Contraseña:</Text>
          <TextInput style={styles.input} placeholder="Ingresa tu contraseña" />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Olvidaste tu contraseña ? </Text>
        </TouchableOpacity>

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
    marginTop: 40,
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
  forgotPassword: {
    fontSize: 15,
    color: "#1877F2",
    // fontWeight: "bold",
  },
  campos: {
    // padding: 10,
    marginTop: 10,
    width: "100%",
    gap: 20,
    marginBottom: 20,
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

export default LoginScreen;
