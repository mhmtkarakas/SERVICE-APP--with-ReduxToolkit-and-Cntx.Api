
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import useApi from '../../hooks/useApi';

const initialValue = {};

export const AuthTokenContext = createContext(initialValue)


export default function AuthTokenContextProvider(props){
    const [token, setToken] = useState(null)
    const localStorageToken = localStorage.getItem('token');
    const userState = useSelector((state)=>state.userState);
    const api = useApi();

//1. durum: Eger token null ise fakat localstorage daki token null degil ise
// o zaman state deki token i guncelle
    if(token === null && localStorageToken !== null){
        setToken(localStorageToken)
    }else{
// 2. durum: Bunun haricindeki butun islemlerde localstorage daki token i guncelle
        localStorage.setItem('token', token)
    }
    //TODO Reduxa baglanip kullanici bilgileri olup olmadigini kontrol et,
    // eger kullanici bilgisi reduxta yoksa o zaman api den bilgiyi alip,
    // reduxa gonder.
    if(token !== null && userState.userData === null){
        api.get('user/appData')
        .then((resp)=>{
            console.log('>>Appdata result:', resp);
        })
        .catch((err)=>{
            console.log('>>Appdata error', err);
        })
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