import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDSQ1lfb1fd-a7nIarb4IVhCakTei7sd2c",
    authDomain: "readinglistapp-9664b.firebaseapp.com",
    projectId: "readinglistapp-9664b",
    storageBucket: "readinglistapp-9664b.appspot.com",
    messagingSenderId: "10063502670",
    appId: "1:10063502670:web:f1a2c033c1040556fc921f"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init auth
const auth = getAuth()

export { db, auth }

