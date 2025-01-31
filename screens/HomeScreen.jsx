import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StatsBebe from "../components/StatsBebe";
import SemanaHome from "../components/SemanaHome";
import PublicidadHome from "../components/PublicidadHome";
import { useSelector } from "react-redux";
import MyCarousel from "../components/Carousel/MyCarousel";

const HomeScreen = ({ navigation }) => {
  const { nombre, semana, logeado } = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {logeado === true ? (
          <Text style={{ marginTop: 10 }}>Hola {nombre}!</Text>
        ) : (
          <></>
        )}
        {logeado === true ? (
          <Text style={styles.title}>Semana {semana} de embarazo</Text>
        ) : (
          <Button
            title="Presiona aqui para acceder a tu cuenta!"
            style={styles.titleJustify}
            onPress={() => {
              navigation.navigate("Perfil");
            }}
          />
        )}

        <SemanaHome />
        <StatsBebe />
        {/* <MyCarousel /> */}

        <View style={styles.atajoDoble}>
          <View style={styles.atajoIndividual}>
            <View style={styles.iconoAtajo}>
              <MaterialIcons
                name="add-shopping-cart"
                size={30}
                color="#EC407A"
              />
            </View>
            <Text style={styles.textoAtajo}>Medicinas</Text>
          </View>
          <View style={styles.atajoIndividual}>
            <View style={styles.iconoAtajo}>
              <MaterialIcons name="directions-bike" size={30} color="#EC407A" />
            </View>
            <Text style={styles.textoAtajo}>Ejercicios</Text>
          </View>
        </View>
        <View style={styles.atajoDoble}>
          <View style={styles.atajoIndividual}>
            <View style={styles.iconoAtajo}>
              <MaterialIcons
                name="add-circle-outline"
                size={30}
                color="#EC407A"
              />
            </View>
            <Text style={styles.textoAtajo}>Hospitales</Text>
          </View>
          <View style={styles.atajoIndividual}>
            <View style={styles.iconoAtajo}>
              <MaterialIcons name="fastfood" size={30} color="#EC407A" />
            </View>
            <Text style={styles.textoAtajo}>Recetas</Text>
          </View>
        </View>

        <PublicidadHome />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  subcontainer: {
    alignItems: "left",
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
  },
  titleJustify: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
    width: "100%",
  },
  atajoDoble: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 10,
    marginBottom: 10,
  },
  atajoIndividual: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 10,
    height: 80,
  },
  textoAtajo: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  iconoAtajo: {
    alignItems: "center",
    padding: 10,
  },
});

export default HomeScreen;
