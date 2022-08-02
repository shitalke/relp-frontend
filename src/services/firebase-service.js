import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDklqJtgi5W7BndTHCJcjC3D9oSxe2F2ys",
  authDomain: "shitalke-dd6c4.firebaseapp.com",  
  projectId: "shitalke-dd6c4",
  databaseURL: "",
  storageBucket: "shitalke-dd6c4.appspot.com",
  messagingSenderId: "1076060314837",
  appId: "1:1076060314837:web:b97b7f142b9ba960f3165c",
  measurementId: "G-2SLB8T06PB"
}

firebase.initializeApp(config);

export const auth = firebase.auth

export default firebase;