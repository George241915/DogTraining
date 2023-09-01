import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
//import {Entypo} from '@expo/vector-icons'
import stylesCamera from '../styles/styleCamera'
import Icon  from "react-native-vector-icons/FontAwesome5";

export default function Button({title,onPress,icon,color}) {
  return (
    <TouchableOpacity onPress={onPress} style={stylesCamera.button}>
        <Icon
            name={icon} size={20} color={ color ? color:'#f1f1f1'}
        ></Icon>
        <Text style={stylesCamera.text}>{title}</Text>
    </TouchableOpacity>
  )
}