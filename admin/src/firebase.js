// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Replace with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCsPpPkOkWmmPrmQzGG5j0pGCVBlFYkadE",
  authDomain: "amuse20-7015c.firebaseapp.com",
  projectId: "amuse20-7015c",
  storageBucket: "amuse20-7015c.firebasestorage.app",
  messagingSenderId: "1096246482758",
  appId: "1:1096246482758:web:c9aae9146f0fdbdc8bb747",
  measurementId: "G-3MSC9X0XS7"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export authentication instance
export const auth = getAuth(app);
export default app;