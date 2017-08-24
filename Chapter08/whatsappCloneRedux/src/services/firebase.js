import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBTzCpganGE5biUFJyDCTq5_ccP8Sa3JjE",
    authDomain: "whatsappclone-f05a8.firebaseapp.com",
    databaseURL: "https://whatsappclone-f05a8.firebaseio.com",
    projectId: "whatsappclone-f05a8",
    storageBucket: "projName-d0c3e.appspot.com",
    storageBucket: "whatsappclone-f05a8.appspot.com",
    messagingSenderId: "577702861159"
})


export const setListener = (endpoint, updaterFn) => {
  firebase.database().ref(endpoint).on('value', updaterFn);
  return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
}
