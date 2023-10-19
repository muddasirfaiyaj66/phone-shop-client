import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

export const AuthContext = createContext(null);
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }

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
        user,loading, createUser, signIn,signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;