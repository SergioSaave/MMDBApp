import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const StatsBebe = () => {
  const { nombre, semana, logeado } = useSelector((state) => state.user);

  return (
    <View style={styles.statsBebe}>
      <View style={styles.statsTop}>
        <Image
          source={{
            uri: "/Users/sergiosaavedra/workspace/MMDBApp/assets/maternal.png",
          }}
          style={styles.imagenBebe}
        />
        {
          logeado === true ? (
            <Text style={styles.textTop}>Le quedan {43 - semana} semanas a tu bebe!</Text>
          ) : (
            <Text style={styles.textTop}>De que tamaño será tu bebe ?</Text>
          )
        }
      </View>
      <View style={styles.statsBot}>
        <View style={styles.statsBotInfo}>
          <Text style={{ color: "grey", fontSize: 12 }}>Altura del bebe</Text>
          <Text>17 cm</Text>
        </View>
        <View>
          <Text style={{ color: "grey", fontSize: 12 }}>Peso del bebe</Text>
          <Text>110 gr</Text>
        </View>
        <View>
          <Text style={{ color: "grey", fontSize: 12 }}>Dias restantes</Text>
          <Text>168 dias</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default StatsBebe;
