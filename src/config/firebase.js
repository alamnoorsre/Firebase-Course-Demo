import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDTwgA6dGGM-lBFi5ldYxMTpTK_oNOh688",
  authDomain: "fir-course-demo-58933.firebaseapp.com",
  projectId: "fir-course-demo-58933",
  storageBucket: "fir-course-demo-58933.appspot.com",
  messagingSenderId: "793063116543",
  appId: "1:793063116543:web:aaa2607c269e3e82ef86ca",
  measurementId: "G-H3HD4WMDDT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
