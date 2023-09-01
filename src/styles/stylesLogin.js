import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30,

    },

    image:{
        width: '100%',
        height:'100%',
        resizeMode:'cover',

    },

    image1:{
            width: '100%',
            height:'108%',
            resizeMode:'contain',
        },
        card:{
            margin:20,
            backgroundColor:'transparent',
            borderRadius:20,
            width:'90%',
            padding:20,
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:2
            },
            shadowOpacity:0.25,
            shadowRadius:1,

        },
        profilePictures:{
            width:200,
            height:200,
            borderRadius:50,
            borderColor:'#ffff',
            tintColor: '#434FDB',
            marginVertical:30,
            resizeMode: 'center'
            
        },
        boxText:{
            paddingVertical:20,
            backgroundColor:'#cccccc',
            borderRadius:30,
            marginVertical:10,
            textAlign: 'center'           
        },
        button:{
            
            alignItems:'center',
            
        },
        boxButton:{
            backgroundColor:'#434FDB',
            borderRadius:30,
            paddingVertical:20,
            width:150,
            marginTop:20,         
            
        },
        TextButton:{
            textAlign:'center',
            color:'#ffff',
           
        }
    
})

export default styles