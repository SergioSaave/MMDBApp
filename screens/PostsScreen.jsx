import React from "react";
import PostList from "../components/PostList";

const PostsScreen = ({navigation}) => {
  return (
    <PostList navigation={navigation}/>
  );
};

export default PostsScreen;
