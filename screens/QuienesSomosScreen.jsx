import {
  View,
  Text,
  StyleSheet,
  Linking,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";

const QuienesSomosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>¿Quienes somos?</Text>
        <Text style={styles.content}>
          Somos un medio dirigido a mujeres gestantes y mamás con niños en edad
          pediátrica. Trabajamos con ginecólogos y pediatras para llevar a las
          familias el mejor contenido y acompañarlas a tomar decisiones
          informadas sobre su embarazo y su bebé. Nuestro libro, Mi manual del
          bebé, lo realizamos con las sociedades médicas y los ginecólogos y
          pediatras los regalan a mujeres gestantes como un complemento a la
          consulta prenatal.
        </Text>

        <Text
          style={styles.librosDigitales}
          onPress={() =>
            Linking.openURL(
              "https://mimanualdelbebe.com/libro-digital-colombia/decimocuarta-edicion/"
            )
          }
        >
          Has click aqui para acceder al libro digital de Colombia!
        </Text>
        <Text
          style={styles.librosDigitales}
          onPress={() =>
            Linking.openURL(
              "https://mimanualdelbebe.com/libro-digital-chile/cuarta-edicion/"
            )
          }
        >
          Has click aqui para acceder al libro digital de Chile!
        </Text>

        <View style={styles.cuadrosDobles}>
          <View style={styles.containerCuadros}>
            <View style={styles.cuadrosDeTexto}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                MISIÓN
              </Text>
            </View>
            <Text style={styles.misionTexto}>
              Acompañar a las familias a tener embarazos sanos y venturosos y
              crianzas positivas y felices
            </Text>
          </View>

          <View style={styles.containerCuadros}>
            <View style={styles.cuadrosDeTexto}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                VISIÓN
              </Text>
            </View>
            <View>
              <Text style={styles.visionListados}>
                {`\u2022 Ser el sitio de elección de las familias hispanoparlantes cuando buscan información confiable, consejos y recomendaciones para su embarazo y crianza de sus hijos.`}
              </Text>
              <Text style={styles.visionListados}>
                {`\u2022 Ser el sitio número uno donde los doctores eligen compartir información a las familias embarazadas y con hijos en sus primeros años de vida.`}
              </Text>
            </View>
          </View>

          <View style={styles.containerCuadros}>
            <View style={styles.cuadrosDeTexto}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                CULTURA
              </Text>
            </View>
            <View>
              <Text style={styles.culturaListados}>
                {`\u2022 Queremos atraer, mantener y apoyar en su desarrollo a personas excelentes`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 Confiamos en nosotro y sabemos que todos estamos siempre dando lo mejor`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 La excelencia en todo lo que hacemos`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 Somos abiertos y nos damos retroalimentación constante`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 Nos enfocamos en mejoramiento continuo`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 Vamos siempre más allá para superar las expectativas de nuestros usuarios, clients y aliados`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 Tomamos muy seriamente a nuestros clientes, usuarios y aliados`}
              </Text>
              <Text style={styles.culturaListados}>
                {`\u2022 Siempre escuchamos, evaluamos y mejoramos`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FAFAFA",
  },
  subcontainer: {
    alignItems: "center",
    // marginLeft: 20,
    // marginRight: 20,
    padding: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    // marginTop: 16
  },
  content: {
    fontSize: 20,
    marginTop: 24,
    textAlign: "justify",
    marginBottom: 10,
  },
  librosDigitales: {
    color: "blue",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    width: "100%",
    marginBottom: 20,
  },
  cuadrosDobles: {
    flexDirection: "column",
    gap: 5,
  },
  containerCuadros: {
    paddingBottom: 20,
    backgroundColor: "#FAFAFA",
    marginBottom: 15,
    borderRadius: 10,
  },
  cuadrosDeTexto: {
    backgroundColor: "#EC407A",
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  misionTexto: {
    fontSize: 20,
    textAlign: "justify",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  visionListados: {
    fontSize: 20,
    textAlign: "justify",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  culturaListados: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

// EC407A

export default QuienesSomosScreen;
