// firebase-functions.ts
import {
  collection,
  addDoc,
  setDoc,
  GeoPoint,
  getDocs,
  query,
  where,
  arrayRemove,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { doc } from "firebase/firestore";

const addUserToFirestore = async (userData: {
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
  userId: string;
}) => {
  try {
    const userDocRef = doc(db, "Usuarios", userData.userId);
    await setDoc(userDocRef, {
      ...userData,
      createdAt: new Date().toISOString(),
    });
    console.log("Usuario registrado en Firestore");
  } catch (error) {
    console.error("Error al agregar usuario a Firestore: ", error);
  }
};

const registerUserAndAddToFirestore = async (userData: {
  email: string;
  name: string;
  password: string;
  address: string;
  phoneNumber: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...userData,
      createdAt: new Date().toISOString(),
      userId: "uniqueUserId", // Aquí puedes generar un ID único para el usuario
    });
    console.log("Usuario registrado con ID: ", docRef.id);
  } catch (error) {
    console.error("Error al agregar usuario a Firestore: ", error);
  }
};

const addStoreToFirestore = async (storeData: {
  direccion: GeoPoint;
  clasificacion: string;
  deliveryPrice: string;
  deliveryTime: string;
  idTienda: string;
  nombre: string;
}) => {
  try {
    const storeDocRef = doc(db, "Tiendas", storeData.idTienda);
    await setDoc(storeDocRef, {
      ...storeData,
      createdAt: new Date().toISOString(),
    });
    console.log("Tienda registrada en Firestore");
  } catch (error) {
    console.error("Error al agregar tienda a Firestore: ", error);
  }
};

const getStoreFromFirestore = async (idTienda: string) => {
  try {
    const storesCollection = collection(db, "Tiendas");
    const q = query(storesCollection, where("idTienda", "==", idTienda));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const storeData = querySnapshot.docs[0].data();
      return storeData;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting store data: ", error);
    return null;
  }
};

// LOGICA FAVORITOS

const addFavoriteToFirestore = async (
  userId: string,
  idTienda: string
): Promise<void> => {
  const userFavoritesRef = doc(db, "Favoritos", userId);

  try {
    await setDoc(
      userFavoritesRef,
      { tiendas: arrayUnion(idTienda) },
      { merge: true }
    );
    console.log("Tienda añadida a favoritos");
  } catch (error) {
    console.error("Error al añadir tienda a favoritos: ", error);
    throw error;
  }
};

const removeFavoriteFromFirestore = async (
  userId: string,
  idTienda: string
): Promise<void> => {
  const userFavoritesRef = doc(db, "Favoritos", userId);

  try {
    await setDoc(
      userFavoritesRef,
      { tiendas: arrayRemove(idTienda) },
      { merge: true }
    );
    console.log("Tienda eliminada de favoritos");
  } catch (error) {
    console.error("Error al eliminar tienda de favoritos: ", error);
    throw error;
  }
};

const getFavoriteStoresForUser = async (userId: string): Promise<string[]> => {
  const userFavoritesRef = doc(db, "Favoritos", userId);

  try {
    const userFavoritesDoc = await getDoc(userFavoritesRef);
    if (userFavoritesDoc.exists()) {
      const userFavoritesData = userFavoritesDoc.data();
      if (userFavoritesData) {
        return userFavoritesData.tiendas || [];
      }
    }
    return [];
  } catch (error) {
    console.error("Error al obtener favoritos del usuario: ", error);
    throw error;
  }
};

export {
  addUserToFirestore,
  registerUserAndAddToFirestore,
  addStoreToFirestore,
  getStoreFromFirestore,
  addFavoriteToFirestore,
  removeFavoriteFromFirestore,
  getFavoriteStoresForUser,
};
