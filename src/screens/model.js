import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, StatusBar ,Button} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
//import Button from './src/components/Button';
import axios from 'axios';
import Canvas from 'react-native-canvas';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons';

const CLASS_COLORS = {
  sitting: {
    border: 'rgb(58, 216, 106)',
    fill: 'rgba(58, 216, 106, 0.5)'
  },
  lying: {
    border: 'rgb(255, 103, 0)',
    fill: 'rgba(255, 103, 0, 0.5)'
  },
  standing: {
    border: 'rgb(245, 0, 183)',
    fill: 'rgba(245, 0, 183, 0.5)'
  }
  
}

const URL = 'https://inf-7add3120-788f-44ba-a66b-6576397d3514-no4xvrhsfq-uc.a.run.app/detect'; // copy and paste your Theos deployment URL here
const FALLBACK_URL = '';

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function detect(imageFile, url=URL, confThres=0.30, iouThres=0.45, retries=10, delay=0) {
  const data = new FormData();
  data.append('image', imageFile);
  data.append('conf_thres', confThres);
  data.append('iou_thres', iouThres);
  try {
    const response = await axios({ method: 'post', url: url, data: data, headers: { 'Content-Type': 'multipart/form-data' } });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 0 || error.response.status === 413) throw new Error('image too large, please select an image smaller than 25MB.');
      else if (error.response.status === 403) throw new Error('you reached your monthly requests limit. Upgrade your plan to unlock unlimited requests.');
      else if (error.response.data) throw new Error(error.response.data.message);
    } else if (retries > 0) {
      if (delay > 0) await sleep(delay);
      return await detect(imageFile, FALLBACK_URL? FALLBACK_URL:URL, confThres, iouThres, retries - 1, 2);
    } else {
      return [];
    }
  }
}


export default function Model({navigation}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);
  const [originalImageWidth, setOriginalImageWidth] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [detecting, setDetecting] = useState(false);
  const [detected, setDetected] = useState(false);
  const [detections, setDetections] = useState([]);
  const [amount, setAmount] = useState('');
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

    useEffect(() => {
    if (navigation.isFocused()) {
      if (cameraRef.current) {
        (async () => {
          await cameraRef.current.resumePreview();
        })();
      }
    } else {
      if (cameraRef.current) {
        (async () => {
          await cameraRef.current.pausePreview();
        })();
      }
    }
  }, [navigation]);
 

  useEffect(() => {
    if (image) {
      detectPicture();
    }
  }, [image])

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setOriginalImageWidth(data.width);
        setImage(data.uri);
        await detectPicture();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const detectPicture = async () => {
    if (image) {
      try {
        const imageFile = {
          uri: image,
          type: 'image/jpeg',
          name: 'image.jpg'
        };
        setDetections([]);
        setAmount('');
        setDetecting(true);
        setDetected(false);
        const detectedCash = await detect(imageFile);
        setDetecting(false);
        setDetected(true);
        setDetections(detectedCash);
        let detectedAmout = '';
        let detectPose='';
        
        detectedCash.forEach((detection) => {
            if (detection.class == 'sitting' || detection.class == 'lying' || detection.class == 'standing'){
              detectPose= 'Felicidades'
            }
    
            detectedAmout = detectPose;   
            
        });
        setAmount(detectedAmout);
      } catch (error) {
        console.log(error);
      }
    }
  };

  function retake() {
    setImage(null);
    setDetections([]);
    setDetecting(false);
    setDetected(false);
    setAmount('');
    FileSystem.deleteAsync(image);
  }

  function drawLabel(ctx, box, scale, canvas) {
    ctx.font = '1em Arial';

    const text = box.class;
    const textMeasure = ctx.measureText(text);
    const horizontalPadding = 5;
    const verticalPadding = 5;
    const textWidth = textMeasure.width + horizontalPadding * 2;
    const textHeight = parseInt(ctx.font) + verticalPadding * 2;
    let x = box.x * scale;
    let y = box.y * scale;

    if (x < 0) x = 0;
    else if (x + textWidth > canvas.width) x = canvas.width - textWidth;

    if (y - textHeight < 0) y = textHeight;
    else if (y + textHeight > canvas.height) y = canvas.height - textHeight;

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.1;
    ctx.fillText(text, x + horizontalPadding, y + 6 * (textHeight / 4));
    ctx.strokeText(text, x + horizontalPadding, y + 6 * (textHeight / 4));
  }

  function drawBox(ctx, box, scale) {
    ctx.beginPath();
    ctx.rect(
      box.x * scale,
      box.y * scale,
      box.width * scale,
      box.height * scale
    );
    ctx.lineWidth = 1.5;
    ctx.fillStyle = CLASS_COLORS[box.class].fill;
    ctx.strokeStyle = CLASS_COLORS[box.class].border;
    ctx.fill();
    ctx.stroke();
  }

  function drawDetection(ctx, detection, scale, canvas) {
    drawBox(ctx, detection, scale);
    drawLabel(ctx, detection, scale, canvas);
  }

  function handleCanvas(canvas) {
    if (canvas) {
      canvas.width = imageWidth;
      canvas.height = imageHeight;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      detections.forEach((detection) => {
        drawDetection(ctx, detection, imageWidth / originalImageWidth, canvas);
      });
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}
          >
          </View>
        </Camera>
      ) : (
        <View style={styles.camera}>
          <Image source={{ uri: image }} style={styles.image}
            onLayout={(event) => {
              var { x, y, width, height } = event.nativeEvent.layout;
              setImageWidth(width);
              setImageHeight(height);
            }} />
          {detecting &&
            <View style={styles.loadingContainer}>
              <ActivityIndicator size='large' color='#ffffff' />
            </View>
          }
          <Canvas ref={handleCanvas} />
        </View>
      )}
      <View style={styles.controls}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 50
          }}
        >
          {image ? <Button
            title='Retake'
            onPress={retake}
            icon='ios-reload'
          />
            :
            <Button
              title='REVERS'
              icon=''
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >   
            </Button>
          }
          <Button disabled={detected} title='sit' onPress={takePicture} icon='color-wand' />
        </View>
        <Text style={styles.predictionText}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  controls: {
    flex: 0.5,
    paddingTop: 15
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 1,
    borderRadius: 20
  },
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  image: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  prediction: {
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  predictionText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 75
  },
  topControls: {
    flex: 1,
  },
});