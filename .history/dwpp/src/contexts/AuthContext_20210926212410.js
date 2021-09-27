import React, { useContext } from 'react'
import {auth} from '../firebase'
const AuthContext=React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser]=useState()

    function signup(fullName, username, email, password, confirmPassword){
        return auth.createUser(fullName, username, email, password, confirmPassword)
    }
useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [])
    

    const value={
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
