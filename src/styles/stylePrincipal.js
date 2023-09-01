import {StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 20,
      tintColor: 'purple',
      
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      marginLeft: 10,
      fontSize: 18,
    },
  });
  export default styles;