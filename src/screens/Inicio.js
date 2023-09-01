import { SafeAreaView,View, Text ,Image, Button, TouchableOpacity, ImageBackground, Alert} from 'react-native'
import React from 'react'
import stylesInicio from '../styles/styleInicio'




export default function Inicio({navigation}) {

   
  return (
    <ImageBackground source={require('../assets/fondo.jpg')} resizeMode={'cover'} style={stylesInicio.image}>
        
        <View style={stylesInicio.button}>
            <TouchableOpacity style={stylesInicio.boxButton} onPress={()=>navigation.navigate('Login')}>
                <Text style={stylesInicio.TextButton}>Bienvenido</Text>
            </TouchableOpacity>
        </View>       
        
        
    </ImageBackground>
  )
}