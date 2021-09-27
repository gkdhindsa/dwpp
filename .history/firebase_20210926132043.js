import firebase from 'firebase/app'
import "firebase/auth"

const app=firebase.initialiseApp({
   
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.,
        projectId: process.env.,
        storageBucket: process.env.,
        messagingSenderId: process.env.,
        appId: process.env.,
        measurementId: process.env.
      
      
})