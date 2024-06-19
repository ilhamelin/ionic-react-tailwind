// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKBBp8GYB_G05kiLbN813ondwBrQe9CF4",
  authDomain: "data-base-uber-eats.firebaseapp.com",
  databaseURL: "https://data-base-uber-eats-default-rtdb.firebaseio.com",
  projectId: "data-base-uber-eats",
  storageBucket: "data-base-uber-eats.appspot.com",
  messagingSenderId: "948116538428",
  appId: "1:948116538428:web:b7d2cd4b23d13b4bbfaf39",
  measurementId: "G-BE23FLZF7Z",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtiene la instancia de autenticación
const auth = getAuth(app);
const db = getFirestore(app);



// Exporta la instancia de autenticación para que pueda ser utilizada en otros archivos
// Exporta la instancia de autenticación para que pueda ser utilizada en otros archivos
export { auth, db };
