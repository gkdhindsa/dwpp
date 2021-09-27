import firebase from 'firebase/app'
import "firebase/auth"

const app=firebase.initialiseApp({
   
        apiKey: "",
        authDomain: "",
        databaseURL="",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
      
      
})