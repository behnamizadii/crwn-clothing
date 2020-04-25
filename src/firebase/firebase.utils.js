import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAmlje0rbfAFIPqxu3wUwAlQCFCYzR86KA',
	authDomain: 'crwn-db-e47cb.firebaseapp.com',
	databaseURL: 'https://crwn-db-e47cb.firebaseio.com',
	projectId: 'crwn-db-e47cb',
	storageBucket: 'crwn-db-e47cb.appspot.com',
	messagingSenderId: '163218174151',
	appId: '1:163218174151:web:8a8f932ce9eca0e420cee2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
