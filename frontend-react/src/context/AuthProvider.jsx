import React , {useState, createContext} from 'react'

// create a context for authentication
const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const accessToken = localStorage.getItem("access_token");
    const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  return (
   <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}
