import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const googleProvider = new GoogleAuthProvider();

// authProvider
export const AuthProvide = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register a user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // login the user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    // sign up with Google
    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    }

    // logout the user
    const logout = () => {
        return signOut(auth);
    }

    // manage user state on auth change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                const userData = {
                    uid,
                    email,
                    username: displayName,
                    photo: photoURL,
                };
                setCurrentUser(userData); // update currentUser state
            } else {
                setCurrentUser(null); // reset currentUser when logged out
            }
        });

        return () => unsubscribe(); // cleanup the listener on unmount
    }, []);

    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
