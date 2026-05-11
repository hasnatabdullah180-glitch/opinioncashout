import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALUY3asegOshNx3GqO4SBSBZH4tV6okPQ",
  authDomain: "opinioncashout-2d976.firebaseapp.com",
  projectId: "opinioncashout-2d976",
  storageBucket: "opinioncashout-2d976.firebasestorage.app",
  messagingSenderId: "188211935964",
  appId: "1:188211935964:web:ec2448ef4c28bebf591219"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);