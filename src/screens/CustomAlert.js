import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CustomAlert({ title, message, onClose, logo }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000); // Cerrar la alerta después de 3 segundos

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        {logo && <Image source={logo} style={styles.logo} />}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  alert: {
    backgroundColor: '#FFC7B0',
    borderRadius: 50,
    padding: 50,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: 'white',
  },
});