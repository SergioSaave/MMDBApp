import React from "react";
import BlogList from "../components/Blogs/BlogList";

const BlogsScreen = ({navigation}) => {
  return (
    <BlogList navigation={navigation}/>
  );
};

export default BlogsScreen;
