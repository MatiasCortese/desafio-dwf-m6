import * as admin from "firebase-admin";
import * as serviceAccount from "./key.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://desafio-m6-apx-97b29-default-rtdb.firebaseio.com"
});

const rtdb = admin.database();
const firestore = admin.firestore();

export {firestore, rtdb};