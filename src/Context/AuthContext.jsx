import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';
import useAxiosSecure from '../Hooks/useAxiosSecure';

export const MyAuthContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(false);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosSecureInstance = useAxiosSecure();

    const emailCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

            const email = currentUser?.email || user?.email;
            const loggedUser = { email: email };

            if (currentUser) {
                axiosSecureInstance.post('/jwt', (loggedUser))
                    .then(res => {
                        setToken(true);
                        // console.log("token ", res.data)
                    });
            } else {
                axiosSecureInstance.post('/logout', (loggedUser))
                    .then(res => {
                        // console.log("token ", res.data)
                    });
            }

        })
        return (() => {
            unSubscribe();
        })
    })

    const authProperty = {
        user,
        loading,
        emailCreateUser,
        emailLogin,
        googleLogin,
        logOut,
        token
    }

    return (
        <MyAuthContext.Provider value={authProperty}>
            {children}
        </MyAuthContext.Provider>
    )
}

export default AuthContext