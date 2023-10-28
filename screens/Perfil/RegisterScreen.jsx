import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
// import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
// import RNPickerSelect from "react-native-picker-select";
import { semanas } from "../../assets/semanasRegister";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/users/userSlice";

const verticalData = [
  { id: 0, text: "Embarazo" },
  { id: 1, text: "Postparto" },
];

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [semana, setSemana] = useState(0);
  const [etapa, setEtapa] = useState("");

  const onNombreChange = (value) => setNombre(value);
  const onEmailChange = (value) => setEmail(value);
  const onPasswordChange = (value) => setPassword(value);
  const onSemanaChange = (value) => setSemana(value);
  const onEtapaChange = ({ text }) => setEtapa(text);

  const onSubmitForm = () => {
    dispatch(
      login({
        nombre,
        email,
        password,
        etapa,
        semana,
        logeado: true,
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
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
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu Nombre"
            onChangeText={onNombreChange}
          />
        </View>

        <View style={styles.campos}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu Email"
            onChangeText={onEmailChange}
          />
        </View>

        <View style={styles.campos}>
          <Text>Contraseña:</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Ingresa tu Contraseña"
            onChangeText={onPasswordChange}
          />
        </View>

        <View style={styles.campos}>
          <Text>Semana:</Text>
          {/* <RNPickerSelect
            onValueChange={(value) => onSemanaChange(value)}
            items={semanas}
            placeholder={{
              label: "Selecciona una semana",
              value: null,
            }}
            style={pickerSelectStyles}
          /> */}
        </View>

        <View style={styles.campos}>
          <Text>Etapa:</Text>

          {/* <BouncyCheckboxGroup
            data={verticalData}
            style={{ flexDirection: "row", gap: 30 }}
            onChange={(selectedItem) => onEtapaChange(selectedItem)}
          /> */}
        </View>

        <TouchableOpacity style={styles.buttonSignIn} onPress={onSubmitForm}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Inicia Sesion
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginTop: 10,
    width: "100%",
    gap: 5,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    backgroundColor: "#CBD5E1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    backgroundColor: "#CBD5E1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
});

export default RegisterScreen;
