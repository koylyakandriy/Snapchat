import firebase  from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBVsJj2KTZESQuRValLsV_Z1Pqfux0aHW0",
	authDomain: "snepchat-clone.firebaseapp.com",
	projectId: "snepchat-clone",
	storageBucket: "snepchat-clone.appspot.com",
	messagingSenderId: "143474033687",
	appId: "1:143474033687:web:5eebc7aad7d281ac7ac852"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider}