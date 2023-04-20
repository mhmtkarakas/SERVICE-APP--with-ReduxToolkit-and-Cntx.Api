
import { createContext, useState } from 'react';

const initialValue = {};

export const AuthTokenContext = createContext(initialValue)


export default function AuthTokenContextProvider(props){
    const [token, setToken] = useState(null)
    const localStorageToken = localStorage.getItem('token')

//1. durum: Eger token null ise fakat localstorage daki token null degil ise
// o zaman state deki token i guncelle
    if(token === null && localStorageToken !== null){
        setToken(localStorageToken)
    }else{
// 2. durum: Bunun haricindeki butun islemlerde localstorage daki token i guncelle
        localStorage.setItem('token', token)
    }

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