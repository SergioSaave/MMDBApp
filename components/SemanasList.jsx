import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SemanaList = ({semana}) => {

    console.log(semana)

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.cardSemana}>
          <View style={styles.cardSemanaSimbolo}>
            <View style={styles.cardSemanaSimboloCirculoInactivated}></View>
            <View style={styles.cardSemanaSimboloLineaInactivated}></View>
          </View>
          <View style={styles.cardSemanaInfo}>
            <Text style={styles.cardSemanaInfoTitulo}>{semana.titulo}</Text>
            <Text style={styles.cardSemanaInfoDescripcion}>
              {semana.descripcion}
            </Text>
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
    marginLeft: 40,
    marginRight: 40,
  },
  cardSemana: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 60
  },
  cardSemanaSimbolo: {
    width: 50,
    height: "100%",
    gap: 10,
  },
  cardSemanaSimboloCirculoInactivated: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#FFCDD2",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardSemanaSimboloLineaInactivated: {
    width: 2,
    height: "100%",
    backgroundColor: "#FFCDD2",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardSemanaSimboloCirculoActivated: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#EC407A",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardSemanaSimboloLineaActivated: {
    width: 2,
    height: "100%",
    backgroundColor: "#EC407A",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardSemanaInfo: {

  },
  cardSemanaInfoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSemanaInfoDescripcion: {
    color: 'grey',
    fontSize: 12,
    width: 300
  },
});

export default SemanaList;
