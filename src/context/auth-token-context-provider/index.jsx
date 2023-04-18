
import { createContext, useState } from 'react';

const initialValue = {};

export const AuthTokenContext = createContext(initialValue)


export default function AuthTokenContextProvider(props){
    const [token, setToken] = useState(null)

    const ContextValue = {
        token,
        setToken,
    }

    return (
    <AuthTokenContext.Provider value={ContextValue}>
        {props.children}
    </AuthTokenContext.Provider>
    )

}