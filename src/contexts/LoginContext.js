import React, { useState, useEffect} from "react";
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../config/utils';

export const LoginContext = React.createContext();

const LoginProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = getLocalStorage('user')
        setUser(userInfo)
    }, [])

    const setUserInfo = async (props) => {
        if(props.username !== null) {
            setLocalStorage('user', {username: props.username});
            await setUser({username: props.username});
            return
        } else {
            setUser(null);
        }
        
    }

    const logOut = () => {
        removeLocalStorage('user');
        setUser(null);
    }

    return (
        <LoginContext.Provider value={{user, setUserInfo, logOut}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider
