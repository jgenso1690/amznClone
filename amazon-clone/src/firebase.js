import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: process.env.DB_apiKey,
        authDomain: process.env.DB_authDomain,
        databaseURL: process.env.DB_databaseURL,
        projectId: process.env.DB_projectId,
        storageBucket: process.env.DB_storageBucket,
        messagingSenderId: process.env.DB_messagingSenderId,
        appId: process.env.DB_appId,
        measurementId: process.env.DB_measurementId,
     
});

const auth = firebase.auth();

export { auth };
