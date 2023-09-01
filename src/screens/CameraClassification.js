import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

import styles from '../styles/styleCamera';

const CameraClassification = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const cameraRef = useRef(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    };
    getCameraPermission();
  }, []);

  
  useFocusEffect(
    React.useCallback(() => {
      if (cameraRef.current) {
        (async () => {
          await cameraRef.current.resumePreview();
        })();
      }
      return () => {
        // Puedes detener la cámara aquí si es necesario al perder el enfoque
      };
    }, []) );

  const saveImage = async () => {
    if (image) {
      try {
        // Guardar la imagen en tu librería u otro lugar
        alert('Picture saved');
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
    {hasCameraPermission === false ? (
      <Text>No access to camera</Text>
    ) : (
      <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}
          >
            <Ionicons name="camera-reverse-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)}
          >
            <Ionicons name={flash === Camera.Constants.FlashMode.off ? 'flash-off-outline' : 'flash-outline'} size={24} color="white" />
          </TouchableOpacity>
        </View>
        {image ? (
          <Image source={{ uri: image }} style={styles.previewImage} />
        ) : (
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Ionicons name="camera-outline" size={48} color="white" />
          </TouchableOpacity>
        )}
        {image && (
          <View style={styles.bottomButtons}>
            <TouchableOpacity style={styles.actionButton} onPress={() => setImage(null)}>
              <Ionicons name="refresh-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Re-take</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={saveImage}>
              <Ionicons name="checkmark-circle-outline" size={24} color="white" />
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </Camera>
    )}
  </View>
);
};


export default CameraClassification;