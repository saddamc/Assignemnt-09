import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the state', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        signIn,
        signInWithGoogle,
        githubLogin,
        logOut,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}