import 'react-native-gesture-handler'
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './screens/AppTabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HerramientasScreen from './screens/HerramientasScreen';
import BlogsStack from './routes/blogsStack';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Mi Manual del Bebe">
        <Drawer.Screen name="Inicio" component={AppTabs}
          options={{
            drawerIcon: () => (
              <MaterialIcons name='child-friendly' size={24} color="#000" />
            )
          }} />
        <Drawer.Screen name="Herramientas" component={HerramientasScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcons name='design-services' size={24} color="#000" />
            )
          }} />
        <Drawer.Screen name="Blogs" component={BlogsStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons name='dashboard' size={24} color="#000" />
            )
          }} />
        <Drawer.Screen name="Nosotros" component={HerramientasScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcons name='family-restroom' size={24} color="#000" />
            )
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}