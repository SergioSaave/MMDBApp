import { Image, StyleSheet } from "react-native";
import React from "react";

const PublicidadHome = () => {
  return (
    <Image
      source={{
        uri: "/Users/sergiosaavedra/workspace/MMDBApp/assets/images/huggies.png",
      }}
      style={styles.imagenHuggies}
    />
  );
};

const styles = StyleSheet.create({
  imagenHuggies: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: "#ccc",
  },
});

export default PublicidadHome;
