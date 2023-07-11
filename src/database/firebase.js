import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApz9RhxAYQQvoqLtg06_v3yjal8Um1qhE",
  authDomain: "netfli-clone-fa9e1.firebaseapp.com",
  projectId: "netfli-clone-fa9e1",
  storageBucket: "netfli-clone-fa9e1.appspot.com",
  messagingSenderId: "316613539650",
  appId: "1:316613539650:web:9b65516409f8c9ee1e3adb",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { auth };
export default db;
