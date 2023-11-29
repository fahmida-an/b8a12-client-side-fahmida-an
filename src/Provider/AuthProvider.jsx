import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = new createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
    

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName:name, photoURL: photo
         })
         
     }

     const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if(currentUser){
                //get token
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }else{
            localStorage.removeItem('access-token')
            }

            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    },[axiosPublic])


    const authInfo ={
        user,
        loading,
        createUser,
        logInUser,
        updateUserProfile,
        logOut,
        signInWithGoogle
      

    }


    return (
        <AuthContext.Provider value ={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;