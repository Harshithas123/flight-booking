import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCNet6aeXTaVdrwNpfQCuQe07cQChQlIVA",
  authDomain: "full-stack-example-fb56b.firebaseapp.com",
  databaseURL: "https://full-stack-example-fb56b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "full-stack-example-fb56b",
  storageBucket: "full-stack-example-fb56b.appspot.com",
  messagingSenderId: "860885258446",
  appId: "1:860885258446:web:7297102550b266f227009f"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDatabase = getDatabase(app);