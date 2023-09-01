import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text,TouchableOpacity , Image } from 'react-native';
import fetchChatGPTResponse from '../components/apiGPT';
import styles from '../styles/styleChat';

import cam from '../assets/IconDog2.png'


const ChatScreen = ({navigation}) => {
  const [message, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await fetchChatGPTResponse('Eres un experto entrenador de perros y sabes sobre perros y si te preguntan de otro tema debes decir: Lo siento, fui entrenado para hablar solo de perros y cosas relacionadas a los mismos.' + '\n' + message);
    setOutputMessage(response);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
        setInputMessage(''); // Limpiar el campo de respuesta al salir de la pantalla
        setOutputMessage(''); // Limpiar el campo de respuesta al salir de la pantalla
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}> 
    <View>
    <Text style={styles.welcomeText}></Text>
      <View style={{alignItems: 'center'}}>
      <Image
          source={cam}
          style={{width: 150,
            height: 150,
            tintColor: '#434FDB',
            resizeMode: "center"}}
        />
      </View>
    </View>
      <View >
        <TextInput
        style={styles.input}
          value={message}
          onChangeText={setInputMessage} 
          placeholder="Escribe tu mensaje"
          textAlign='center'
        />
      </View>
      <View style={{alignContent:'center', alignItems: 'center', paddingBottom: 10}}>
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
              <Text style={styles.buttonText}>
                Enviar
              </Text>
          </TouchableOpacity>
      </View>
      <View style={{alignContent:'center', alignItems: 'center',}}>
        <Text >
         {outputMessage}
        </Text>
      </View>
      
    </View>
  );
};


export default ChatScreen;