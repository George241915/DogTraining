import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
    textContainer:{
      paddingVertical:20,
      paddingHorizontal:100,
      backgroundColor:'#cccccc40',
      borderRadius:30,
      marginVertical:10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'purple',
      alignContent:'center',
      padding: 10,
      borderRadius: 10,
      margin: 20,
      width:'90%',
      height:80,
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 15,
    width:'50%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    display: "flex"
  },
    });

export default styles;