import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const SemanaList = ({ navigation, semana }) => {
  const user = useSelector((state) => state.user);
  const resumenContent = semana.descripcion.split(" ").slice(0, 20).join(" ");

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {semana.titulo == "Semana 1" ? (
          <Text style={styles.avisoTrimestre}>Primer Trimestre</Text>
        ) : null}
        {semana.titulo == "Semana 14" ? (
          <Text style={styles.avisoTrimestre}>Segundo Trimestre</Text>
        ) : null}
        {semana.titulo == "Semana 28" ? (
          <Text style={styles.avisoTrimestre}>Tercer Trimestre</Text>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SemanaOnly", {
              semana: semana,
            });
          }}
        >
          <View style={styles.cardSemana}>
            <View style={styles.cardSemanaSimbolo}>
              {semana.titulo.split(" ")[1] === user.semana.toString() ? (
                <>
                  <View
                    style={styles.cardSemanaSimboloCirculoActivated}
                  ></View>
                  <View style={styles.cardSemanaSimboloLineaActivated}></View>
                </>
              ) : (
                <>
                  <View
                    style={styles.cardSemanaSimboloCirculoInactivated}
                  ></View>
                  <View style={styles.cardSemanaSimboloLineaInactivated}></View>
                </>
              )}
            </View>
            <View style={styles.cardSemanaInfo}>
              <Text style={styles.cardSemanaInfoTitulo}>{semana.titulo}</Text>
              <Text style={styles.cardSemanaInfoDescripcion}>
                {resumenContent}...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  cardSemana: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
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
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardSemanaSimboloLineaInactivated: {
    width: 2,
    height: "60%",
    backgroundColor: "#FFCDD2",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardSemanaSimboloCirculoActivated: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#EC407A",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardSemanaSimboloLineaActivated: {
    width: 2,
    height: "60%",
    backgroundColor: "#EC407A",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardSemanaInfo: {
    gap: 10,
  },
  cardSemanaInfoTitulo: {
    fontSize: 16,
    fontWeight: "400",
  },
  cardSemanaInfoDescripcion: {
    color: "grey",
    fontSize: 12,
    width: 300,
  },
  avisoTrimestre: {
    color: "#EC407A",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SemanaList;
