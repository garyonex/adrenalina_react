// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTnQzPQmwlJRw9Zw03dRrinv4Jbq6wcDo",
  authDomain: "adrenalina-e.firebaseapp.com",
  projectId: "adrenalina-e",
  storageBucket: "adrenalina-e.appspot.com",
  messagingSenderId: "114539533383",
  appId: "1:114539533383:web:be7cd3706efdf84d434d62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function getFirestoreApp(){
    return app
}