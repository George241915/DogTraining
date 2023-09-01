import { View, Text, SafeAreaView,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import styles from '../styles/styleProfile'
import Icon from "react-native-vector-icons/FontAwesome5"


const facebook = <Icon name="facebook" size={50} ></Icon>
const instagram = <Icon name="instagram" size={50} ></Icon>
const linkedin = <Icon name="linkedin" size={50} ></Icon>


export default function HomeUser() {
  const user = {
    avatar: '',
    coverPhoto:"https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Avicola Estefania",
    correo: "avicola@gmail.com",
    phone: "0987652419",
    Dirección: "Mulalo",
    Ciudad: "Latacunga"
}

  return (
    <View style={styles.container}>
      
      <View style ={styles.avatarContainer}>
        
        <View style={styles.card}>
          <View style ={styles.avatarContainer}>
            <Image source={require('../assets/perfil.jpg')} style={styles.avatar}/>
            <Text style={styles.namePrincipal}>
              {user.name}
            </Text>
            <Text style={styles.emailSecond}>
              {user.correo}
            </Text>
            <View style={styles.buttonContainer}>
              <Text style={{color:'#F19A34'}} onPress={()=>Linking.openURL("https:www.facebook.com")}
              >{facebook}</Text>
              <Text style={{color:'#F19A34'}} onPress={()=>Linking.openURL("https:www.instagram.com")}
              >{instagram}</Text>
              <Text style={{color:'#F19A34'}} onPress={()=>Linking.openURL("https:www.linkedin.com")}
              >{linkedin}</Text>
            </View>
          </View> 
        </View>

        <View style={styles.cardD}>
          <Text style={{paddingTop:5}}>Telefono</Text>
          <Text style={styles.name}>
                {user.phone}
          </Text>
          <Text style={{paddingTop:5}}>Dirección</Text>
          <Text style={styles.name}>
                 {user.Dirección}
          </Text>
          <Text style={{paddingTop:5}}>Ciudad</Text>
          <Text style={styles.name}>
                {user.Ciudad}
          </Text>
        </View>
        
        
      </View>
    </View>
  )
}