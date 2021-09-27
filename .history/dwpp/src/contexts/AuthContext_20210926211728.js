import React from 'react'
const AuthContext=React.createContext()
export function useAuth(){
    return const context = useContext(contextValue)
}

export function AuthProvider({children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
