
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBbYEcKvLpqhajZHpHtOLW-IJ0Cd26FhmU",
  authDomain: "graduation-project-368eb.firebaseapp.com",
  projectId: "graduation-project-368eb",
  storageBucket: "graduation-project-368eb.firebasestorage.app",
  messagingSenderId: "674268025260",
  appId: "1:674268025260:web:af2909c2bd319298a4ea09",
};


const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
