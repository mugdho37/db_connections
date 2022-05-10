const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyC7ZRsipT3l0KuBk2GMhi1GphKLbWH1jy0",
  authDomain: "nodejs-95ecb.firebaseapp.com",
  projectId: "nodejs-95ecb",
  storageBucket: "nodejs-95ecb.appspot.com",
  messagingSenderId: "669432341466",
  appId: "1:669432341466:web:ef659c6c9a3cb71c1896e3",
  measurementId: "G-CL7HWC2Y4S",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
if (db) {
  console.log("Database connected");
}
// const User = db.collection("Users");
db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ` ,doc.data());
  });
})
