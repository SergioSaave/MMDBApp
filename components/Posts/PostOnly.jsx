import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const PostOnly = ({ navigation, route }) => {
  let post = route.params.post;

  console.log(post)

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.titulo}>{post.title}</Text>
          <Image source={{ uri: post.image_urls[1] }} style={styles.imagen} />

          <Text style={styles.descripcion}>{post.content}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.buttonBack}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Volver</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  descripcion: {
    // fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  imagen: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonBack: {
    padding: 10,
    backgroundColor: "#F687B3",
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default PostOnly;
