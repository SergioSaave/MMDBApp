import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const BlogOnly = ({ navigation, route }) => {
  let blog = route.params.blog; //Para manejarlo mejor

  return (
    <View>
      <ScrollView style={styles.container}>
        <Text style={styles.title}> {blog.title} </Text>
        <Image source={{ uri: blog.image_url }} style={styles.img} />
        <Text style={styles.content}> {blog.content} </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.returnButton}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Atras</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BlogOnly;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    width: '90%'
  },
  img: {
    width: "100%",
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  content: {
    marginTop: 20,
    textAlign: "justify",
    marginBottom: 30, //Porque el Tabbar me lo corta con el ScrollView
  },
  returnButton: {
    marginBottom: 60,
    backgroundColor: "#EC407A",
    padding: 16,
    width: '40%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
});
