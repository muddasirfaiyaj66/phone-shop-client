import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext(null);
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const handleUpdateProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }
    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const logOut =() => {
        return signOut(auth)

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
        user,loading, createUser, signIn,signInWithGoogle, logOut,handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;