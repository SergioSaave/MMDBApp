import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { format, getWeek, startOfWeek, endOfWeek, getDate } from "date-fns";

const SemanaHome = () => {
  // Obtén la fecha actual
  const currentDate = new Date();

  // Obtiene el inicio y fin de la semana actual
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

  const daysInWeek = Array.from(
    { length: endOfCurrentWeek.getDate() - startOfCurrentWeek.getDate() + 1 },
    (_, index) => startOfCurrentWeek.getDate() + index
  );

  return (
    <View style={styles.dias}>
      {getDate(currentDate) == daysInWeek[0] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Lun</Text>
          <Text style={{ color: "white" }}>{daysInWeek[0]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Lun</Text>
          <Text>{daysInWeek[0]}</Text>
        </View>
      )}
      {getDate(currentDate) == daysInWeek[1] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Mar</Text>
          <Text style={{ color: "white" }}>{daysInWeek[1]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Mar</Text>
          <Text>{daysInWeek[1]}</Text>
        </View>
      )}
      {getDate(currentDate) == daysInWeek[2] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Mie</Text>
          <Text style={{ color: "white" }}>{daysInWeek[2]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Mie</Text>
          <Text>{daysInWeek[2]}</Text>
        </View>
      )}
      {getDate(currentDate) == daysInWeek[3] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Jue</Text>
          <Text style={{ color: "white" }}>{daysInWeek[3]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Jue</Text>
          <Text>{daysInWeek[3]}</Text>
        </View>
      )}
      {getDate(currentDate) == daysInWeek[4] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Vie</Text>
          <Text style={{ color: "white" }}>{daysInWeek[4]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Vie</Text>
          <Text>{daysInWeek[4]}</Text>
        </View>
      )}
      {getDate(currentDate) == daysInWeek[5] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Sab</Text>
          <Text style={{ color: "white" }}>{daysInWeek[5]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Sab</Text>
          <Text>{daysInWeek[5]}</Text>
        </View>
      )}
      {getDate(currentDate) == daysInWeek[6] ? (
        <View style={styles.diasCardActual}>
          <Text style={{ color: "white", fontSize: 10 }}>Dom</Text>
          <Text style={{ color: "white" }}>{daysInWeek[6]}</Text>
        </View>
      ) : (
        <View style={styles.diasCard}>
          <Text style={{ color: "grey", fontSize: 10 }}>Dom</Text>
          <Text>{daysInWeek[6]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dias: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100vw",
    height: "100vh",
  },
  diasCard: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    height: 70,
    textAlign: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
  },
  diasCardActual: {
    flex: 1,
    padding: 10,
    backgroundColor: "#EC407A",
    height: 70,
    textAlign: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
  },
});

export default SemanaHome;
