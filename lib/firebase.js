import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAY8kO0VT2ABs2WwrpgnH1Hu14CocXW7Ug",
  authDomain: "wedding-d3b87.firebaseapp.com",
  databaseURL: "https://wedding-d3b87.firebaseio.com",
  projectId: "wedding-d3b87",
  storageBucket: "wedding-d3b87.appspot.com",
  messagingSenderId: "12845332445"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
