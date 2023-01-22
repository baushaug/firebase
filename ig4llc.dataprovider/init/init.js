// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA01taAVPP2XKi93tcHGGQNwueZ4Kl5o9M",
  authDomain: "ig4llc.firebaseapp.com",
  projectId: "ig4llc",
  storageBucket: "ig4llc.appspot.com",
  messagingSenderId: "428747732686",
  appId: "1:428747732686:web:02271fe2bdaddc150a829f",
  measurementId: "G-B2LHRGLWSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);