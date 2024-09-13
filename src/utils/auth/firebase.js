// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD53xMoDyLMif-2Rrpa27BhSyVeVUK1AKA",
  authDomain: "fir-b61fb.firebaseapp.com",
  projectId: "fir-b61fb",
  storageBucket: "fir-b61fb.appspot.com",
  messagingSenderId: "910179927170",
  appId: "1:910179927170:web:28db88fc3ec4a84bfb209b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
