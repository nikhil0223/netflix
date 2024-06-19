import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7UcXUdZWP_ULNK808CGOfdNGmjFbDIOU",
  authDomain: "netflix-ced55.firebaseapp.com",
  projectId: "netflix-ced55",
  storageBucket: "netflix-ced55.appspot.com",
  messagingSenderId: "944267969995",
  appId: "1:944267969995:web:7646d488663ee52a8ea24e",
  measurementId: "G-QKTCXYZTY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//code required for hosting project on firebase

export const auth = getAuth();

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVjZWMyNGJlOGIzOGVhMWQ2MDRkMDRjNmUyNGNjOSIsInN1YiI6IjYzNjY4YzE4MTY4NGY3MDA3Zjc4M2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R6z1OyjNvoFbfOpReh-HBwUB1E2nFDn7FUYcaC4q914",
  },
};
