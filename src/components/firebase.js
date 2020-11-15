import * as firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyByfOSj--aejBOApxBDq6vukvjOtkUwFPE",
    authDomain: "olx-clone-e7ebb.firebaseapp.com",
    databaseURL: "https://olx-clone-e7ebb.firebaseio.com",
    projectId: "olx-clone-e7ebb",
    storageBucket: "olx-clone-e7ebb.appspot.com",
    messagingSenderId: "530808381209",
    appId: "1:530808381209:web:db932b92a6a84af4d2ef88",
    measurementId: "G-XDV2740M06"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  