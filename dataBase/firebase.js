import firebase from "firebase"
import "firebase/firestore"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCB-kuALN4_0fnw2BtEomlTuAe2WgXq4xI",
  authDomain: "react-native-firebase-a9879.firebaseapp.com",
  projectId: "react-native-firebase-a9879",
  storageBucket: "react-native-firebase-a9879.appspot.com",
  messagingSenderId: "111951896516",
  appId: "1:111951896516:web:214eca0eebfd593f144e91",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default {
  firebase,
  db,
}
