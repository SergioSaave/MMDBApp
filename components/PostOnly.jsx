import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PostOnly = ({ navigation, route }) => {

    let blog = route.params.blog//Para manejarlo mejor

    return (
        <View>
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Text>Atras</Text>
                </TouchableOpacity>
                <Image
                    source={{ uri: blog.image_url }}
                    style={styles.img}
                />
                <Text style={styles.title}> {blog.title} </Text>
                <Text style={styles.content} > {blog.content} </Text>


            </ScrollView>
        </View>
    )
}

export default PostOnly

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    img: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    content: {
        marginTop: 20,
        textAlign: 'justify',
        marginBottom: 50 //Porque el Tabbar me lo corta con el ScrollView
    }
})