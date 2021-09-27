import React, { useContext, useState} from 'react'
import {auth} from '../firebase'
const AuthContext=React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser]=useState()

    function signup(fullName, username, email, password){
        return auth.createUserUsingEmailAndPassword(fullName, username, email, password, confirmPassword)
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
