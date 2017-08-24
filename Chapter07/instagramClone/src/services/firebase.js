import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBDwOxPciWmboHxcnpjZP74ZCTGb7ZHjoI",
    authDomain: "instagramclone-95b15.firebaseapp.com",
    databaseURL: "https://instagramclone-95b15.firebaseio.com",
    projectId: "instagramclone-95b15",
    storageBucket: "instagramclone-95b15.appspot.com",
    messagingSenderId: "266642055553"
})


export const setListener = (endpoint, updaterFn) => {
  firebase.database().ref(endpoint).on('value', updaterFn);
  return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
}


export const login = (email, pass) =>
  firebase.auth()
    .signInWithEmailAndPassword(email, pass)

export const logout = () =>
  firebase.auth().signOut()

export const signup = (email, pass) =>
  firebase.auth().createUserWithEmailAndPassword(email, pass);
