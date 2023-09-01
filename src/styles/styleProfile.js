import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F0F3F4',
      width: "100%",
      height: "100%",
      alignItems: "center"
    },coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },avatarContainer: {
        
        alignItems: "center",
        marginTop: -5,
    },avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white", 
        marginTop: -75,
    }, name: {
        marginTop: 10,
        fontSize: 17,
        fontWeight: "bold",
        color: '#515A5A',
        width:250,
        textAlign:'left'
    },buttonContainer: {
        flexDirection: "row",
        marginTop: 35,
        width: "80%",
        justifyContent: "space-between"
    },
    card:{
        margin:95,
        backgroundColor:'#ffff',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    boxText:{
        paddingVertical:5,
        backgroundColor:'#cccccc40',
        borderRadius:20,
        marginVertical:5
        
    },
    namePrincipal:{
        marginTop: 5,
        fontSize: 25,
        fontWeight: "bold",
        color: 'purple',
        width:250,
        textAlign:'center'
    },
    emailSecond:{
        color:'#c0c0c0',
        marginTop: 5,
        fontSize: 15,
        textAlign:'center'
    },
    cardD:{
        margin:-35,
        backgroundColor:'#ffff',
        borderRadius:20,
        width:'90%',
        padding:35,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:2
    },

  });

  export default styles;