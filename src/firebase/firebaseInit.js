import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmhn1brlkF37xd0-zc-MVB7U5cf3Z90jk",
  authDomain: "fireblogsyt-5f57f.firebaseapp.com",
  projectId: "fireblogsyt-5f57f",
  storageBucket: "fireblogsyt-5f57f.appspot.com",
  messagingSenderId: "810077019030",
  appId: "1:810077019030:web:b5179bfd9534b9b0d1dbb7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { timestamp };
export default firebaseApp.firestore();
