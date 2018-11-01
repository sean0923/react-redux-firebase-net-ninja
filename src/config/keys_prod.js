const functions = require('firebase-functions');

// firebaseConfig
const firebaseConfig = {
  apiKey: functions.config().fb.api_key,
  authDomain: functions.config().fb.auth_omain,
  databaseURL: functions.config().fb.database_url,
  projectId: functions.config().fb.project_id,
  storageBucket: functions.config().fb.storage_bucket,
  messagingSenderId: functions.config().fb.messaging_sender_id,
};

export default { firebaseConfig };
