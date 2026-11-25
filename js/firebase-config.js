import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvhpJjB6igoxXqg7CgL-OMKnKaGQARMfo",
  authDomain: "ubuhanzi-connect.firebaseapp.com",
  projectId: "ubuhanzi-connect",
  storageBucket: "ubuhanzi-connect.firebasestorage.app",
  messagingSenderId: "108254870165",
  appId: "1:108254870165:web:0b06e9f15d74c637b6b99c",
  measurementId: "G-RV5R3L8KDV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);