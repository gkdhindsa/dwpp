import React, { useContext } from 'react'
import {auth} from '../firebase'
const AuthContext=React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser]=useState()

    function signup(fullName, username, email, password, confirmPassword){
        auth.createUser(fullName, username, email, password, confirmPassword)
    }

    const value={
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
