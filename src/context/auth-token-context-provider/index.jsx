
import { createContext } from 'react';

const initialValue = {};

export const AuthTokenContext = createContext(initialValue)


export default function AuthTokenContextProvider(props){
    const ContextValue = {
        // fill this area
    }
    return (
    <AuthTokenContext.Provider value={ContextValue}>
        {props.children}
    </AuthTokenContext.Provider>
    )

}