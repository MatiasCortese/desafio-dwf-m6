import { router } from "./router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA2LorIlc-RVSZg4h4ByPNJt0cSKrVcGdQ",
    authDomain: "desafio-m6-apx-97b29.firebaseapp.com",
    databaseURL: "https://desafio-m6-apx-97b29-default-rtdb.firebaseio.com",
    projectId: "desafio-m6-apx-97b29",
    storageBucket: "desafio-m6-apx-97b29.appspot.com",
    messagingSenderId: "239668822364",
    appId: "1:239668822364:web:d0881358c0c0db14b68199",
    measurementId: "G-GLQ99Q1FDM"
});


(async function(){
    router;
    const db = getFirestore(firebaseApp);
    const roomsCollection = collection(db, "rooms");
    const snapshot = await getDocs(roomsCollection);
    console.log(snapshot);
})();