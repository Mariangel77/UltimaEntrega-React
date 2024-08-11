import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCua-mm7IpT4fOTRo6k0r3yDpALjaLhzcE",
  authDomain: "molinashop-5a8c3.firebaseapp.com",
  projectId: "molinashop-5a8c3",
  storageBucket: "molinashop-5a8c3.appspot.com",
  messagingSenderId: "339404695180",
  appId: "1:339404695180:web:cf04acde7a4c043d323da9"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)