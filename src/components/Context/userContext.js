import { createContext } from 'react';
import { useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
const [isAuth, setIsAuth] = useState(false)
const foo = "hello depuis context"



  return <UserContext.Provider value={{foo, setIsAuth, isAuth}}>{props.children}</UserContext.Provider>;
}
