import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: "wadda-deal.firebaseapp.com",
  databaseURL: "https://wadda-deal.firebaseio.com",
  projectId: "wadda-deal",
  storageBucket: "wadda-deal.appspot.com",
  messagingSenderId: "1085278322408",
  appId: "1:1085278322408:web:f6f8064524b771fbc7935d",
  measurementId: "G-8YFKQFBD5Q",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
