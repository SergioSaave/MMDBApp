import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { login, logout } from "../store/slices/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-paper";

const PerfilScreen = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Mi Perfil</Text>
      </View>
      {/* <Button title="logout" onPress={() => dispatch(logout())} /> */}
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
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    // marginTop: 16
  },
});

export default PerfilScreen;
