import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={{ marginTop: 10 }}>Hola Astrid!</Text>
        <Text style={styles.title}>Semana 16 de embarazo</Text>

        <View style={styles.dias}>
          <View style={styles.diasCard}>
            <Text style={{ color: "grey" }}>Lun</Text>
            <Text>16</Text>
          </View>
          <View style={styles.diasCardActual}>
            <Text style={{ color: "white" }}>Mar</Text>
            <Text style={{ color: "white" }}>17</Text>
          </View>
          <View style={styles.diasCard}>
            <Text style={{ color: "grey" }}>Mie</Text>
            <Text>21</Text>
          </View>
          <View style={styles.diasCard}>
            <Text style={{ color: "grey" }}>Jue</Text>
            <Text>18</Text>
          </View>
          <View style={styles.diasCard}>
            <Text style={{ color: "grey" }}>Vie</Text>
            <Text>19</Text>
          </View>
          <View style={styles.diasCard}>
            <Text style={{ color: "grey" }}>Sab</Text>
            <Text>20</Text>
          </View>
          <View style={styles.diasCard}>
            <Text style={{ color: "grey" }}>Dom</Text>
            <Text>21</Text>
          </View>
        </View>

        <View style={styles.statsBebe}>
          <View style={styles.statsTop}>
            <Image
              source={{
                uri: "/Users/sergiosaavedra/workspace/MMDBApp/assets/maternal.png",
              }}
              style={styles.imagenBebe}
            />
            <Text style={styles.textTop}>
              Tu bebe es del tamaño de una pera!
            </Text>
          </View>
          <View style={styles.statsBot}>
            <View style={styles.statsBotInfo}>
              <Text style={{ color: "grey", fontSize: 12 }}>
                Altura del bebe
              </Text>
              <Text>17 cm</Text>
            </View>
            <View>
              <Text style={{ color: "grey", fontSize: 12 }}>Peso del bebe</Text>
              <Text>110 gr</Text>
            </View>
            <View>
              <Text style={{ color: "grey", fontSize: 12 }}>
                Dias restantes
              </Text>
              <Text>168 dias</Text>
            </View>
          </View>
        </View>

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
  dias: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 5,
    marginTop: 10,
  },
  diasCard: {
    padding: 10,
    backgroundColor: "#fff",
    height: 70,
    textAlign: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
  },
  diasCardActual: {
    padding: 10,
    backgroundColor: "#EC407A",
    height: 70,
    textAlign: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
  },
  statsBebe: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  statsTop: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imagenBebe: {
    width: "10%",
    height: "40%",
    backgroundColor: "#FFCDD2",
    borderRadius: 100,
    padding: 30,
  },
  textTop: {
    textAlign: "center",
    color: "grey",
    fontSize: 13,
  },
  statsBot: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statsBotInfo: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "left",
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
  }
});

export default HomeScreen;

// EC407A
