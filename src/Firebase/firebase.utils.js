import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
  apiKey: "AIzaSyBymY-7XsqZPuZLM4bfjxps1Bk1np2s8g4",
  authDomain: "ropos-ddd05.firebaseapp.com",
  projectId: "ropos-ddd05",
  storageBucket: "ropos-ddd05.appspot.com",
  messagingSenderId: "607009809813",
  appId: "1:607009809813:web:d82e54d7f1d3158903029c"

  };

  firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //console.log(firestore.doc('users/212rer4232'))
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);
  const snapShot = await userRef.get();
  console.log(snapShot.data());
  if (!snapShot.exists) {
    const { name, email, age  } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        name,
        email,
        createdAt,
        age,
        ...additionalData
      });
    } catch (error) {
     // console.log('error creating user', error.message);
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