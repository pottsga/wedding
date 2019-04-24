import * as firebase from "firebase";

import firebase_config from "../secret"


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
