// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDukG-8m4a7lYCnNnbjhkYg_72zF8RJ5ns",
  authDomain: "the-wok-n-roll-recipe.firebaseapp.com",
  projectId: "the-wok-n-roll-recipe",
  storageBucket: "the-wok-n-roll-recipe.appspot.com",
  messagingSenderId: "422220659513",
  appId: "1:422220659513:web:ba8bebc68c81192e7106e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;