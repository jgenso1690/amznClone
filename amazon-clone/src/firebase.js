import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyC7-bOsQY9-X0Lgdr6vdmqsYsD9MOOr1-w",
        authDomain: "jimena-amznclone.firebaseapp.com",
        databaseURL: "https://jimena-amznclone.firebaseio.com",
        projectId: "jimena-amznclone",
        storageBucket: "jimena-amznclone.appspot.com",
        messagingSenderId: "66073307000",
        appId: "1:66073307000:web:678b0d3a87443d5f764a8d",
        measurementId: "G-HLKQ32PEJ3"
     
});

const auth = firebase.auth();

export { auth };
