import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = () => {
  if (getApps().length <= 0) {
    const app = initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        getAnalytics();
      }
    }
    return app;
  }
};

export const firebaseStore = () => {
  const store = getFirestore(firebaseApp());
  return store;
};

export const firebaseDB = () => {
  const db = getDatabase(firebaseApp());
  return db;
};

export const app = firebaseApp();
export const db = getFirestore();

//get taro cards
export async function getTaro() {
  try {
    const taroCol = await collection(firebaseStore(), "taro");
    const taroSnapshot = await getDocs(taroCol);
    const taroList = await taroSnapshot.docs.map((doc) => doc.data());
    return taroList;
  } catch (error) {
    console.log(error);
  }
}

//get tale
export async function getTale(taleLink, cardsID) {
  const url = await taleLink.substring(
    taleLink.lastIndexOf("/") + 1,
    taleLink.length
  );
  const ids = await cardsID.split(",");

  try {
    const taroCol = await collection(firebaseStore(), url);
    const q = await query(taroCol, where("cardId", "in", ids));
    const cardsById = await getDocs(q);
    const cardsList = await cardsById.docs.map((doc) => doc.data());
    return cardsList;
  } catch (error) {
    console.log(error);
  }
}
