import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBXstBFrH9IQNA0EdU0d9GU_4JXy-acyuU',
  authDomain: 'net-ninja-react-redux-fi-3f831.firebaseapp.com',
  databaseURL: 'https://net-ninja-react-redux-fi-3f831.firebaseio.com',
  projectId: 'net-ninja-react-redux-fi-3f831',
  storageBucket: 'net-ninja-react-redux-fi-3f831.appspot.com',
  messagingSenderId: '447541053849',
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
