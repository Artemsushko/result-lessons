import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKLka2uGe79i_YWw0jYQGtW_H14F-8fzw",
  authDomain: "todo-list-4b21d.firebaseapp.com",
  projectId: "todo-list-4b21d",
  storageBucket: "todo-list-4b21d.firebasestorage.app",
  messagingSenderId: "226948509897",
  appId: "1:226948509897:web:39ebe427c4866542735d18",
  databaseURL:
    "https://todo-list-4b21d-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
