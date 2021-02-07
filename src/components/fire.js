import firebase from 'firebase' ;

var firebaseConfig = {
  apiKey: "AIzaSyDcNWThAk2zqpnJ3HNkOMIH-C-diUSAMpw",
  authDomain: "react-firebase-auth-ba9a3.firebaseapp.com",
  projectId: "react-firebase-auth-ba9a3",
  storageBucket: "react-firebase-auth-ba9a3.appspot.com",
  messagingSenderId: "881233972024",
  appId: "1:881233972024:web:25d92d4fb2c945d08dcfcd"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;