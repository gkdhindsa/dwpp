import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app=firebase.initializeApp({
   
        // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        // appId: process.env.REACT_APP_FIREBASE_APP_ID,
        apiKey: "AIzaSyC66NgcrIXFtzNA62snpABxLfYJHSDHL5w",
  authDomain: "auth-development-3205b.firebaseapp.com",
  databaseURL: "https://auth-development-3205b-default-rtdb.firebaseio.com",
  projectId: "auth-development-3205b",
  storageBucket: "auth-development-3205b.appspot.com",
  messagingSenderId: "592213130074",
  appId: "1:592213130074:web:eabc267f432e016fd65163",
  measurementId: "G-QT0TNF4608"
  
      
})
export const auth=app.auth()
export default app