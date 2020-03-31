import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKQVxtFskzqDdR9MpUZT-NrMGqfvxZNcU",
  authDomain: "crwn-db-739a9.firebaseapp.com",
  databaseURL: "https://crwn-db-739a9.firebaseio.com",
  projectId: "crwn-db-739a9",
  storageBucket: "crwn-db-739a9.appspot.com",
  messagingSenderId: "525704391209",
  appId: "1:525704391209:web:ae5db2532588b6ad0f4a38"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
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
        ...additonalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
