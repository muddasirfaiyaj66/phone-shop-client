import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {getAuth, onAuthStateChanged} from "firebase/auth"

export const AuthContext = createContext(null);
const auth =getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe()
        }
    },[]);
    const authInfo = {
        user,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;