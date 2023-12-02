import { applicationDefault } from "firebase-admin/app";
import * as serviceAccount from "./key.json";
import * as admin from "firebase-admin";
import { getFirestore } from "firebase/firestore";

const defaultApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://desafio-m6-apx-97b29-default-rtdb.firebaseio.com"
}, "desafio-m6");

const rtdb = defaultApp.database();
const firestore = defaultApp.firestore();

export {firestore, rtdb};