import { createContext, useState, useEffect } from 'react';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const StayLogFromLocalStorage = JSON.parse(localStorage.getItem('log') || '[]');


export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(StayLogFromLocalStorage);
  const [loadingData, setLoadingData] = useState();
  const auth = getAuth();
  
/* StayLog */
  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(currentUser));
  }, [currentUser]);


  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert('vous êtes deconnecté');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const stayLog = (email, pwd) =>
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, pwd);
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
      });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        signUp,
        signIn,
        logOut,
        currentUser,
        setCurrentUser,
        loadingData,
        stayLog,
      }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
