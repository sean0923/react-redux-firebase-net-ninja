import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import keys from './keys';

// Initialize Firebase
firebase.initializeApp(keys.firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
