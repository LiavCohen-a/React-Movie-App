import fireBase from 'firebase/app';
import  firebase from 'firebase'
import 'firebase/firebase-firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBO1xaPfkWBvd9h_aQk1Z6DTENR0_QBt24",
  authDomain: "moviesreactproject.firebaseapp.com",
  projectId: "moviesreactproject",
  storageBucket: "moviesreactproject.appspot.com",
  messagingSenderId: "633599010926",
  appId: "1:633599010926:web:614016f9690fcd0b07de7f",
  measurementId: "G-SX7541N3WG"
};


  fireBase.initializeApp(firebaseConfig);

export default fireBase