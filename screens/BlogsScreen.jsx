import React from "react";
import PostList from "../components/PostList";

const BlogsScreen = ({navigation}) => {
  return (
    <PostList navigation={navigation}/>
  );
};

export default BlogsScreen;
