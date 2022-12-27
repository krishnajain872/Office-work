import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCmZsoynr53Gm7Xwc9cQ0YRAZSIcZ3F5wk",
  authDomain: "devicecure-899eb.firebaseapp.com",
  databaseURL: "https://devicecure-899eb.firebaseio.com",
  projectId: "devicecure-899eb",
  storageBucket: "devicecure-899eb.appspot.com",
  messagingSenderId: "620978785832",
  appId: "1:620978785832:web:620b1abf3002a883efaf1d",
  measurementId: "G-SV9QRE85DT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth()
}

var verify = null
const setVerify =(v)=>{
  verify = v
}


export {firebase,auth,verify,setVerify}
