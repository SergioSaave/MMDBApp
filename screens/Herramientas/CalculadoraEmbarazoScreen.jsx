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
import { getFechaParto } from "../../helpers/getFechaParto";
import { getSemanasEmbarazo } from "../../helpers/getSemanasEmbarazo";
import { semanas, dias } from "../../helpers/getSemanasEmbarazo";

const fechaFormatoOriginal = getFormatedDate(new Date(), "YYYY-MM-DD");
const fecha = new Date(fechaFormatoOriginal);

// Resta 280 días
fecha.setDate(fecha.getDate() - 280);

const nuevoAnio = fecha.getFullYear();
const nuevoMes = (fecha.getMonth() + 1).toString().padStart(2, "0");
const nuevoDia = fecha.getDate();

const nuevaFecha = nuevoAnio + "-" + nuevoMes + "-" + nuevoDia;

const CalculadoraEmbarazoScreen = ({ navigation }) => {
  const [form, setForm] = useState(false);
  const [fechaParto, setFechaParto] = useState("");
  const [diasEmbarazo, setDiasEmbarazo] = useState("");
  const [semanasEmbarazo, setSemanasEmbarazo] = useState("");

  const onDateChange = (date) => {
    const fechaNueva = getFechaParto(date);
    const semanasEmbarazo = getSemanasEmbarazo(date);
    setFechaParto(fechaNueva);
    setDiasEmbarazo(semanasEmbarazo.dias);
    setSemanasEmbarazo(semanasEmbarazo.semanas);
    setForm(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Calculadora de Embarazo</Text>
        <Text style={styles.content}>
          Con esta calculadora de embarazo puedes saber cuál es la fecha
          estimada en que nacerá tu bebé, cuándo quedaste embarazada, a partir
          de qué día es eficaz realizarte el test de embarazo, en cuál semana s
          encuentra tu bebé, cuánto mide y pesa actualmente tu bebé y cuántos
          días quedan para que des a luz.
        </Text>
        <Text style={styles.content}>
          Para realizar todos estos cálculos tan solo debes poner los datos en
          la calculadora de embarazo cuál fue el primer día de tu última
          menstruación y cuántos días suele durar el ciclo menstrual.
        </Text>
        <Text style={styles.content}>
          Si no tienes un ciclo menstrual muy regular, el cálculo no será tan
          exacto, pero se aproxima bastante a las fechas reales. Ten en cuenta
          que esta calculadora de embarazo tan solo te da una fecha aproximada
          de parto y que este día sí puede variar de un embarazo a otro.
        </Text>
        <Text style={styles.content}>
          Ingresa los datos y prepáralo todo para disfrutar de tu embarazo y
          darle la bienvenida a tu bebé.
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
          minimumDate={nuevaFecha}
          maximumDate={fechaFormatoOriginal}
          mode="calendar"
          onSelectedChange={(date) => onDateChange(date)}
        />

        {form === true ? (
          <View style={{ marginTop: -30 }}>
            <Text style={styles.fechaTexto}>Fecha probable del parto: </Text>
            <Text>{fechaParto}</Text>
            <Text style={styles.fechaTexto}>Semanas de embarazo:</Text>
            <Text>
              {semanasEmbarazo} semanas y {diasEmbarazo} dias
            </Text>
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

export default CalculadoraEmbarazoScreen;
