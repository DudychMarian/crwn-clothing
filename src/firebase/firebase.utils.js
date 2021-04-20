import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCUhrBCLV9CGBkRWjrdMLzrHeLC5w_YjZA",
  authDomain: "crwn-db-1d6cf.firebaseapp.com",
  projectId: "crwn-db-1d6cf",
  storageBucket: "crwn-db-1d6cf.appspot.com",
  messagingSenderId: "110027525500",
  appId: "1:110027525500:web:cf8f0a85b1c8c5a556e8f9",
  measurementId: "G-V1D706KDDK"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;