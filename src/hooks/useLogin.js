import { useState } from "react"

import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from '../hooks/useAuthContext'


export const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .catch((err) => {
                setError('Wrong password or email')
            })
    }

    return { error, login }
}