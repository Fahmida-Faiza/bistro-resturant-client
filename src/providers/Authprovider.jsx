import { useEffect, useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const Authprovider = ({children}) => {

    const[user, setUser] = useState(null);
    const[loading, setLoading]=useState(true)
//create user
const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
//signIn
const signIn =(email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password)
}
//logout
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

//updateprofile
const updateUserProfile =(name, photo)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL:photo
    })
}





/////////////////////////////
    useEffect( () =>{
      const unsubscribe=  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('currentuser', currentUser)
            setLoading(false);
        })
        return () =>{
            return unsubscribe()
        }

    }, [])
 const authInfo ={
    user,
    loading,
    createUser,
    signIn,
    logOut,
     updateUserProfile
 }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;