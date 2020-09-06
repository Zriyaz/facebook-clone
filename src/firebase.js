import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBEjgH7bwquLZxtMFpTffbWA6Z9r4aopHA",
  authDomain: "facebook-clone-30cc9.firebaseapp.com",
  databaseURL: "https://facebook-clone-30cc9.firebaseio.com",
  projectId: "facebook-clone-30cc9",
  storageBucket: "facebook-clone-30cc9.appspot.com",
  messagingSenderId: "949945105882",
  appId: "1:949945105882:web:53a8eaa7fb4bcc536054e3",
  measurementId: "G-QZ5WW9QXXJ"
};



const firebseApp = firebase.initializeApp(firebaseConfig)

const db= firebseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider }
export default db




