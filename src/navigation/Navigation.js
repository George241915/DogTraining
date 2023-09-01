import { View, Image, Text} from 'react-native'
import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeUser from '../screens/HomeUser';
import Statistics from '../screens/Statistics';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/stylesNavegacion';


//import camicon
import cam from '../assets/logEC.png'
import Bienvenido from '../screens/Bienvenido';
import Recomendaciones from '../screens/Recomendaciones';
import Model from '../screens/model';


const Tab= createBottomTabNavigator();

export default function Navigation(props) {
 
  return (
      <Tab.Navigator initialRouteName='Inicio' screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#efb810',
      tabBarInactiveTintColor: 'black',
      tabBarStyle: [styles.tabnav],
      tabBarIcon: ({ color }) => screenOptions(route, color),
      tabBarLabel: ({focused, color }) => {
        let labelicon = '';
        switch (route.name) {
          case 'Inicio':
            labelicon = focused ? 'Inicio' : '';
            break;
          case 'Classification':
            labelicon = focused ? '' : '';
            break;
          case 'Recomendaciones':
            labelicon = focused ? 'Recomendaciones' : '';
            break; 
        } 
        return <Text style={{color:'purple'}}>{labelicon}</Text>
      }
    })}>
      <Tab.Screen name='Inicio' component={Bienvenido}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabvaricon}>
              <FontAwesome5 name="home" size={20} color={focused ? 'purple' : 'gray'}>
              </FontAwesome5>
            </View>),
            headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen name='HomeUser' component={HomeUser}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabvaricon}>
              <FontAwesome5 name="home" size={20} color={focused ? 'purple' : 'gray'}>
              </FontAwesome5>
            </View>),
            headerShown: false,
            tabBarButton: () => null
        }}
      ></Tab.Screen>
      <Tab.Screen name='Classification' component={Model}
        options={{
          tabBarIcon: ({ focused }) => (
            
              <View style={styles.actionboton} >
                <Image source={cam} style={styles.camicon}>
                </Image>
              </View>
            
          ) , 
          headerShown: false,
          tabBarStyle: {display: "none"}
        }} 
        key="camera-screen"
      ></Tab.Screen>
      <Tab.Screen name='Recomendaciones' component={Recomendaciones} 
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={styles.tabvaricon}>
              <FontAwesome5 name="brain" size={20} color={focused ? 'purple' : 'gray'}>
              </FontAwesome5>
            </View>),
          headerShown: false,      
        }} 
  
      ></Tab.Screen>
    </Tab.Navigator>
    )
}




/* <Tab.Screen name='Recomendaciones' component={Recomendaciones}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabvaricon}>
              <FontAwesome5 name="home" size={20} color={focused ? 'purple' : 'gray'}>
              </FontAwesome5>
            </View>),
            headerShown: false,
            tabBarButton: () => null
        }}
      ></Tab.Screen>*/
