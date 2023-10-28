import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DatePicker, {
  getToday,
  getFormatedDate,
} from "react-native-modern-datepicker";
import { getFechaOvulacion } from "../../helpers/getFechaOvulacion";

const fechaFormatoOriginal = getFormatedDate(new Date(), "YYYY-MM-DD");
const fecha = new Date(fechaFormatoOriginal);

// Resta 280 días
fecha.setDate(fecha.getDate() - 280);

const nuevoAnio = fecha.getFullYear();
const nuevoMes = (fecha.getMonth() + 1).toString().padStart(2, "0");
const nuevoDia = fecha.getDate();

const fechaNueva = nuevoAnio + "-" + nuevoMes + "-" + nuevoDia;

const CalculadoraOvulacionScreen = ({ navigation }) => {
  const [form, setForm] = useState(false);
  const [fechaOvulacion, setFechaOvulacion] = useState("");
  const [fechaOvulacionPrimerDia, setFechaOvulacionPrimerDia] = useState("");
  const [fechaOvulacionUltimoDia, setFechaOvulacionUltimoDia] = useState("");

  const onDateChange = (date) => {
    const semanasEmbarazo = getFechaOvulacion(date);
    setFechaOvulacion(semanasEmbarazo.nuevaFecha);
    setFechaOvulacionPrimerDia(semanasEmbarazo.nuevaFechaPrimerDia);
    setFechaOvulacionUltimoDia(semanasEmbarazo.nuevaFechaUltimoDia);
    setForm(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Calculadora de Ovulacion</Text>
        <Text style={styles.content}>
          Si quieres quedar embarazada es recomendable conocer cuál es el rango
          de fechas en las cuales tienes mayores chances de quedar embarazada.
          Para esto se recomienda que lleves control del primer día de tu
          menstruacion y la periodicidad con que te llega la menstruación. Con
          estos dos datos nuestra calculadora de ovulación te puede dar un rango
          de fechas, cada mes, en los que se considera tus chances de quedar
          embarazada son mayores.
        </Text>
        <Text style={styles.content}>
          Temas como la estabilidad de la pareja, situacion laboral y
          financiera, proyecto de vida, entre otros son muy importantes tener en
          cuanta en el momento que decidas crear una familia. Se recomienda
          tener una valoración médica adecuada, una nutricion adecuada, la
          práctica de ejercicio de manera regular, además de las recomendación
          médicas, para incrementar los chances de quedar embarazada.
        </Text>
        <Text style={styles.periodo}>
          Ingresa la fecha de tu último periodo:
        </Text>
        <DatePicker
          options={{
            backgroundColor: "#FAFAFA",
            mainColor: "#EC407A",
          }}
          current={fechaFormatoOriginal}
          minimumDate={fechaNueva}
          maximumDate={fechaFormatoOriginal}
          mode="calendar"
          onSelectedChange={(date) => onDateChange(date)}
        />

        {form === true ? (
          <View style={{ marginTop: -30 }}>
            <Text style={styles.fechaTexto}>Dia de Ovulación: {fechaOvulacion}</Text>
            <Text style={styles.fechaTexto}>Primer dia fertil: {fechaOvulacionPrimerDia}</Text>
            <Text style={styles.fechaTexto}>Último dia fertil: {fechaOvulacionUltimoDia}</Text>
          </View>
        ) : (
          <></>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    backgroundColor: "#F687B3",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  content: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "justify",
    marginBottom: 10,
  },
  periodo: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "justify",
    marginBottom: 10,
    fontWeight: "bold",
  },
  fechaTexto: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  fechaPartoResultado: {},
});

export default CalculadoraOvulacionScreen;
