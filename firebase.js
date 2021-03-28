import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBVb3UZKC6XF4wpOoCWexgx9xy5vyjN7fQ",
  authDomain: "article-app-e74aa.firebaseapp.com",
  projectId: "article-app-e74aa",
  storageBucket: "article-app-e74aa.appspot.com",
  messagingSenderId: "70286823084",
  appId: "1:70286823084:web:abd2b3149a7a1747a45909",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}
export default firebase;
