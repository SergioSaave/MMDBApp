import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

import { blogMamas } from "../assets/data"
import { FlatList } from "react-native-gesture-handler";
import PostItem from "../components/PostItem";

const PostList = () => {
  const renderItem = ({ item }) => {
    return <PostItem post={item} />;
  };

  return (
    <FlatList
      style={{ width: "100%" }}
      data={blogMamas}
      keyExtractor={(posts) => posts.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  card: {
    padding: 40,
    backgroundColor: "red",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default PostList;
