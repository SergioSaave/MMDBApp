import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StatsBebe from "../../components/StatsBebe";
import { logout } from "../../store/slices/users/userSlice";

const PerfilScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Mi Perfil</Text>
        <StatsBebe />
        <TouchableOpacity
          style={styles.irSemana}
          onPress={() => {
            navigation.navigate("Semanas", { irSemana: user });
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Ver informacion de mi semana!
          </Text>
        </TouchableOpacity>
        <Button title="logout" onPress={() => dispatch(logout())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FAFAFA",
  },
  subcontainer: {
    alignItems: "center",
    padding: 24,
    alignItems: "left",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    // marginTop: 16
  },
  irSemana: {
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F687B3",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default PerfilScreen;
