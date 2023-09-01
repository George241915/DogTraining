import { StyleSheet } from "react-native";
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
const stylesInicio=StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    image:{
        flex:1,
        resizeMode:'cover',
        
    },
    button:{
        
        alignItems:'center',
        
    },
    boxButton:{
        backgroundColor:'purple',
        borderRadius:30,
        paddingVertical:15,
        width:200,
        marginTop:690
    },
    TextButton:{
        textAlign:'center',
        color:'#ffff',
        fontSize:18,
    }
    
})

export default stylesInicio