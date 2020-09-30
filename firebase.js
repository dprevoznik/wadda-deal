import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDX8yBzTao49yhU1YdsFB2dzURzq6kY_Oo",
  authDomain: "wadda-deal.firebaseapp.com",
  databaseURL: "https://wadda-deal.firebaseio.com",
  projectId: "wadda-deal",
  storageBucket: "wadda-deal.appspot.com",
  messagingSenderId: "1085278322408",
  appId: "1:1085278322408:web:f6f8064524b771fbc7935d",
  measurementId: "G-8YFKQFBD5Q",
};

// Initialize Firebase
if (!firebase.apps.length && typeof window !== "undefined") {
  firebase.initializeApp(firebaseConfig);
  // To enable analytics
  firebase.analytics(firebase);
  var storage = firebase.storage();
}

export { storage, firebase as default };
