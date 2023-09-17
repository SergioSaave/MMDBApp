import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen'
import FaltaScreen from './FaltaScreen';
import UsuariosScreen from './UsuariosScreen';
import PostsScreen from './PostsScreen';
import BlogsStack from '../routes/blogsStack';

const Tab = createMaterialBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focusedm, size, colour = '#FF7C97' }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focusedm ? 'ios-home' : 'ios-home-outline';
                }
                else if (route.name === 'Posts') {
                    iconName = focusedm ? 'ios-book' : 'ios-book-outline';
                }
                else if (route.name === 'Falta') {
                    iconName = focusedm ? 'ios-home' : 'ios-home-outline';
                }
                else if (route.name === 'Perfil') {
                    iconName = focusedm ? 'ios-person' : 'ios-person-outline';
                }
                return <Ionic name={iconName} size={24} color={colour} />
            }
        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Posts" component={BlogsStack} />
            <Tab.Screen name="Falta" component={FaltaScreen} />
            <Tab.Screen name="Perfil" component={UsuariosScreen} />
        </Tab.Navigator>
    )
}

export default AppTabs