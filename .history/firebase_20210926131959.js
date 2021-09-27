import firebase from 'firebase/app'
import "firebase/auth"

const app=firebase.initialiseApp({
   
        apiKey: process.env.,
        authDomain: process.env.,
        databaseURL: process.env.,
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
      
      
})