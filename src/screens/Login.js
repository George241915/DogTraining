import { View,SafeAreaView, Text,Image,ScrollView,TouchableOpacity,TextInput,Button, Alert, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../styles/stylesLogin'
import app from '../api/firebaseConfig'
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import CustomAlert from './CustomAlert';

import cam from '../assets/logEC.png'

const auth=getAuth(app)



export default function Login(props) {

    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

    const logueo = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          setShowWelcomeAlert(true); // Mostrar la alerta de bienvenida
          setTimeout(() => {
            setShowWelcomeAlert(false); // Ocultar la alerta después de unos segundos
            props.navigation.navigate('Home'); // Navegar a la pantalla principal
          }, 1000); // 3000 ms = 3 segundos
        } catch (error) {
          Alert.alert('Error', 'El usuario o la contraseña son incorrectos');
        }
      };



  return (
    
        <View style={styles.container}>
            <ImageBackground source={require('../assets/alimentoC.jpg')} resizeMode={'cover'} style={styles.image1}>
            <View style={{justifyContent:'center',alignItems:'center',}}>
                <Image source={require('../assets/logEC.png')} style={styles.profilePictures}></Image>
            </View>
            <View style={styles.card} >
                <View style={styles.boxText}>
                    <TextInput onChangeText={(text)=>setEmail(text)} placeholder='correo@gmail.com' style={styles.input} textAlign='center'></TextInput>
                </View>
                <View style={styles.boxText}>
                    <TextInput onChangeText={(text)=>setPassword(text)} placeholder='password' style={styles.input} secureTextEntry={true} textAlign='center'></TextInput>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.boxButton} onPress={logueo}>
                        <Text style={styles.TextButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
            </ImageBackground>
            {showWelcomeAlert && ( // Mostrar la alerta si showWelcomeAlert es true
        <CustomAlert
        title="¡Bienvenido a EggScan!"
        message="Iniciando sesión..."
        onClose={() => setShowWelcomeAlert(false)}
        logo={cam}
      />
      )}
        </View>
        
    
  )
}