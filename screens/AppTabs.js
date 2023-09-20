import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen'
import BlogsStack from '../routes/blogsStack';
import UsuariosStack from '../routes/usuariosStack';
import PaeStack from '../routes/paeStack';
import PostsScreen from './PostsScreen';
import SemanasStack from '../routes/semanasStack';

const Tab = createMaterialBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, colour = '#EC407A' }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                }
                else if (route.name === 'Semanas') {
                    iconName = focused ? 'calendar' : 'calendar-outline';
                }
                else if (route.name === 'Posts') {
                    iconName = focused ? 'ios-book' : 'ios-book-outline';
                }
                else if (route.name === 'PAE') {
                    iconName = focused ? 'ios-medkit' : 'ios-medkit-outline';
                }
                else if (route.name === 'Perfil') {
                    iconName = focused ? 'ios-person' : 'ios-person-outline';
                }
                return <Ionic name={iconName} size={24} color={colour} />
            }
        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Semanas" component={SemanasStack} />
            <Tab.Screen name="Posts" component={PostsScreen} />
            <Tab.Screen name="PAE" component={PaeStack} />
            <Tab.Screen name="Perfil" component={UsuariosStack} />
        </Tab.Navigator>
    )
}

export default AppTabs