import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  /*     apiKey: 'AIzaSyA6a7jYguMMMenUGaQ7iXpGrcUQwD5Ch7k',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID, */

  apiKey: 'AIzaSyA6a7jYguMMMenUGaQ7iXpGrcUQwD5Ch7k',
  authDomain: 'food-delivery-de4d2.firebaseapp.com',
  databaseURL:
    'https://food-delivery-de4d2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'food-delivery-de4d2',
  storageBucket: 'food-delivery-de4d2.appspot.com',
  messagingSenderId: '161796174047',
  appId: '1:161796174047:web:3735594e449fea685a796a',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
