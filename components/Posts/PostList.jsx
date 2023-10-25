import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostList = ({ navigation, post }) => {
  const tituloContent = post.title.split(" ").slice(0, 7).join(" ");
  const resumenContent = post.content.split(" ").slice(0, 15).join(" ");

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate("PostOnly", {
              post: post,
            });
          }}
        >
          <Image source={{ uri: post.image_urls[1] }} style={styles.imagen} />
          <View>
            <Text style={styles.title}>{tituloContent + "..."}</Text>
            <Text style={styles.content}>{resumenContent + "..."}</Text>
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
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 15,
    marginBottom: 0,
    height: 130,
    borderRadius: 10,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    maxWidth: 230,
  },
  content: {
    maxWidth: 280,
    marginTop: 10,
  },
});

export default PostList;
