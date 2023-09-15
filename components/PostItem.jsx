import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const PostItem = ({ post }) => {
  const imageUrl = post.image_url;

  const resumenContent = post.content.split(" ").slice(0, 10).join(" ");

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.imagen} />
      <View>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{resumenContent + "..."}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginVertical: 8,
    height: 130,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
