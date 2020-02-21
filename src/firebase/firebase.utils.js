import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDAmmJf8oiANNgGJsgnZRcgzsZnaqZtDI0",
  authDomain: "crwn-db-672ea.firebaseapp.com",
  databaseURL: "https://crwn-db-672ea.firebaseio.com",
  projectId: "crwn-db-672ea",
  storageBucket: "crwn-db-672ea.appspot.com",
  messagingSenderId: "842948500973",
  appId: "1:842948500973:web:446fbc55a46021df05dbe4",
  measurementId: "G-PBD458P9GR"
};

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