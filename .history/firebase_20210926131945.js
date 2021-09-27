import firebase from 'firebase/app'
import "firebase/auth"

const app=firebase.initialiseApp({
   
        apiKey: process.env,
        authDomain: "",
        databaseURL="",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
      
      
})