// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  UserCredential,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Importa Firebase Storage

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

// Obtiene la instancia de autenticación y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Configura el proveedor de autenticación de Google
const provider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
};

// Maneja el resultado de la redirección después del inicio de sesión
getRedirectResult(auth)
  .then((result: UserCredential | null) => {
    if (result) {
      // `credential` puede no existir en `UserCredential`, manejarlo adecuadamente
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        // Usa el token si es necesario
      }
      const user = result.user;
      // Usa el usuario autenticado
    }
  })
  .catch((error) => {
    // Maneja los errores aquí
    console.error(error);
  });

// Exporta la instancia de autenticación y Firestore para que puedan ser utilizadas en otros archivos
export { auth, db, loginWithGoogle };
export const storage = getStorage(app); // Inicializa Firebase Storage