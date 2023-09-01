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
        height:'95%',
        resizeMode:'cover',
        top: 40
        
    },
    button:{
        
        alignItems:'center',
        
    },
    boxButton:{
        backgroundColor:'#434FDB',
        borderRadius:30,
        paddingVertical:15,
        width:200,
        marginTop:400
    },
    TextButton:{
        textAlign:'center',
        color:'#ffff',
        fontSize:18,
    }
    
})

export default stylesInicio