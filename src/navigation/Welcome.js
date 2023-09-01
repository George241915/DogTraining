import React from 'react'
import Inicio from '../screens/Inicio'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Navigation from './Navigation'
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import cam from '../assets/IconDog2.png'


const Stack=createNativeStackNavigator()


export default function Welcome(props) {

  const navigation = useNavigation();

  const handleSignOut = () => {
    Alert.alert(
      'Confirmación',
      '¿Desea salir?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            navigation.navigate('Principio');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const HeaderTitle = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image
        source={cam} // Ruta de tu imagen de logo
        style={{ width: 30, height: 30, marginRight: 10 , tintColor:'#0123E1', resizeMode: 'center'}}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0123E1'}}  onPress={()=>navigation.navigate('Inicio')}>DogTrainer</Text>
    </View>
  );

  return (
    <Stack.Navigator initialRouteName='Inicio' screenOptions={({navigation}) =>({
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('HomeUser')}>
          <FontAwesome5 name="user" size={20} color={'#0123E1'}></FontAwesome5>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={handleSignOut}>
          <FontAwesome5 name="sign-out-alt" size={20} color={'#0123E1'}></FontAwesome5>
        </TouchableOpacity>
      ),
      headerTitle: () => <HeaderTitle />,
      headerTintColor: '#0123E1',
      headerBackVisible: false,
      headerStyle: {backgroundColor: '#969FFF'}
    }
  )}>
        <Stack.Screen name='Principio' component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Navigation}></Stack.Screen>
    </Stack.Navigator>
  )
}