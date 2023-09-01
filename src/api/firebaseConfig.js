import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARVWm0vAokCQTM2IxmmHmxHvsu5PCnhYI",
  authDomain: "eggscam-bbed2.firebaseapp.com",
  projectId: "eggscam-bbed2",
  storageBucket: "eggscam-bbed2.appspot.com",
  messagingSenderId: "397269046513",
  appId: "1:397269046513:web:7507373ec0292eef944550",
  measurementId: "G-26GXFPEL56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app