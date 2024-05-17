import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseConfig';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState({})

    console.log(currentUser)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        })
    })
    return {
        currentUser
    }
}

export default useAuth
