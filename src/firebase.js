
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBmTsUGlZFP2tQklEsMTYgyH9scOPMIOKE",
  authDomain: "akay-portfolio.firebaseapp.com",
  projectId: "akay-portfolio",
  storageBucket: "akay-portfolio.appspot.com",
  messagingSenderId: "814160268692",
  appId: "1:814160268692:web:ce3d6cd9920e90f13d9381"
};


export const app = initializeApp(firebaseConfig);
export const db=getFirestore();