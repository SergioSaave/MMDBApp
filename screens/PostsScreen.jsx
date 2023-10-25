import React, { useEffect, useState } from "react";
import PostList from "../components/Posts/PostList";
import { FlatList } from "react-native";
import EmptyListMessage from "../components/Posts/EmptyListMessage";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://api.mimanualdelbebe.com/api/blog_expertos";

  useEffect(() => {
    // Realizar una solicitud GET a una API utilizando el método fetch
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        // Actualizar el estado con los datos de la API
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar datos:", error);
        setLoading(false);
      });
  }, []);

  const renderPost = ({ item }) => {
    return <PostList navigation={navigation} post={item} />;
  };
  return <FlatList data={posts} renderItem={renderPost} ListEmptyComponent={EmptyListMessage} />;
};

export default PostsScreen;
