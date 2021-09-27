import React, { useContext, useState, useEffect} from 'react'
import {auth, createUserWithEmailAndPassword } from '../firebase'
const AuthContext=React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser]=useState()

    function signup(fullName, username, email, password){
        return auth.createUserUsingEmailAn(fullName, username, email, password)
    }
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    return unsubscribe
}, [])
    

    const value={
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
