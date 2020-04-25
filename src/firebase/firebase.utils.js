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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			alert('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
