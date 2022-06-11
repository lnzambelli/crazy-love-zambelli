import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9JnB-JyF6bzWyb6qWEYI7AjZ1CuOSP3o",
  authDomain: "vircrazylove.firebaseapp.com",
  projectId: "vircrazylove",
  storageBucket: "vircrazylove.appspot.com",
  messagingSenderId: "579547271736",
  appId: "1:579547271736:web:538d90b53161bd9dcc4ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//para evitar hacer la llamada en cada componente ya q getFirebase es necesario para obtener la data
const db = getFirestore(app)

export default db