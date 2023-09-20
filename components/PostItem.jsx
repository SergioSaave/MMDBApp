import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const PostItem = ({ post, navigation }) => {

  const imageUrl = post.image_url;

  const resumenContent = post.content.split(" ").slice(0, 10).join(" ");

  return (
    <TouchableWithoutFeedback
      style={styles.card}
      onPress={() => {
        navigation.navigate('PostOnly', { blog: post });
      }}
    >
      <Image source={{ uri: imageUrl }} style={styles.imagen} />
      <View>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{resumenContent + "..."}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
    maxWidth: 230,
    marginTop: 10,
  },
});

export default PostItem;
