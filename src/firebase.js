import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCxlj7MJ3LjuIBHpflStmBRqzVQb4YcUxg",
    authDomain: "facebook-clone-3e9c1.firebaseapp.com",
    projectId: "facebook-clone-3e9c1",
    storageBucket: "facebook-clone-3e9c1.appspot.com",
    messagingSenderId: "859513065871",
    appId: "1:859513065871:web:e415182db49f4043b2fbfa"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore() ;
const auth = firebase.auth() ;

const provider = new firebase.auth.GoogleAuthProvider()

export {provider,auth} ;
export default db ;