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
  DocumentData,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { doc } from "firebase/firestore";
import { Producto } from "../Context/CarritoContext";

// Base de Datos Login y Register

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

//------------------------------------------------------//
//--------------- Base de Datos Tiendas ---------------//
//----------------------------------------------------//

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

const getStoreFromFirestoreVista = async (
  idTienda: string
): Promise<DocumentData | null> => {
  try {
    // Crear una consulta para buscar el documento con el campo idTienda igual a "1"
    const q = query(
      collection(db, "Tiendas"),
      where("idTienda", "==", idTienda)
    );

    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);

    // Verificar si se encontró algún documento
    if (querySnapshot.empty) {
      console.log("No se encontró ningún documento con idTienda:", idTienda);
      return null;
    }

    // Si se encontró, retornar el primer documento encontrado (asumiendo que idTienda es único)
    const doc = querySnapshot.docs[0];
    return doc.data();
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    throw error; // Manejar el error según sea necesario en tu aplicación
  }
};

//-------------------------------------------------------//
//--------------- Base de Datos Producto ---------------//
//----------------------------------------------------//

//--------------- Base de Datos Producto Los Bajones ---------------//
const addProductToFirestore = async (productData: {
  idProducto: string;
  cantidadProducto: string;
  cantidadReview: string;
  imagenUrl: string;
  nombre: string;
  popularidad: string;
  ingredientes: string;
  precio: string;
}) => {
  try {
    const productDocRef = doc(db, "ProductoLosBajones", productData.idProducto);
    await setDoc(productDocRef, {
      ...productData,
      createdAt: new Date().toISOString(),
    });
    console.log("Producto registrada en Firestore");
  } catch (error) {
    console.error("Error al agregar product a Firestore: ", error);
  }
};

const getProductFromFirestore = async (idProducto: string) => {
  try {
    const productsCollection = collection(db, "ProductoLosBajones");
    const q = query(productsCollection, where("idProducto", "==", idProducto));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const productData = querySnapshot.docs[0].data();
      return productData;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting store data: ", error);
    return null;
  }
};

const getProductFromFirestoreVista = async (
  idProducto: string
): Promise<DocumentData | null> => {
  try {
    const q = query(
      collection(db, "ProductoLosBajones"),
      where("idProducto", "==", idProducto)
    );

    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);

    // Verificar si se encontró algún documento
    if (querySnapshot.empty) {
      console.log(
        "No se encontró ningún documento con idProducto:",
        idProducto
      );
      return null;
    }

    // Si se encontró, retornar el primer documento encontrado (asumiendo que idTienda es único)
    const doc = querySnapshot.docs[0];
    return doc.data();
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    throw error; // Manejar el error según sea necesario en tu aplicación
  }
};

//--------------- Base de Datos Producto KFC ---------------//
const addProductKFCToFirestore = async (productData: {
  idProducto: string;
  cantidadProducto: string;
  cantidadReview: string;
  imagenUrl: string;
  nombre: string;
  popularidad: string;
  ingredientes: string;
  precio: string;
}) => {
  try {
    const productDocRef = doc(db, "ProductoKFC", productData.idProducto);
    await setDoc(productDocRef, {
      ...productData,
      createdAt: new Date().toISOString(),
    });
    console.log("Producto KFC registrada en Firestore");
  } catch (error) {
    console.error("Error al agregar producto KFC a Firestore: ", error);
  }
};

const getProductKFCFromFirestore = async (idProducto: string) => {
  try {
    const productsCollection = collection(db, "ProductoKFC");
    const q = query(productsCollection, where("idProducto", "==", idProducto));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const productData = querySnapshot.docs[0].data();
      return productData;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting product KFC data: ", error);
    return null;
  }
};

const getProductKFCFromFirestoreVista = async (
  idProducto: string
): Promise<DocumentData | null> => {
  try {
    const q = query(
      collection(db, "ProductoKFC"),
      where("idProducto", "==", idProducto)
    );

    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);

    // Verificar si se encontró algún documento
    if (querySnapshot.empty) {
      console.log(
        "No se encontró ningún documento con idProducto:",
        idProducto
      );
      return null;
    }

    // Si se encontró, retornar el primer documento encontrado (asumiendo que idTienda es único)
    const doc = querySnapshot.docs[0];
    return doc.data();
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    throw error; // Manejar el error según sea necesario en tu aplicación
  }
};

//--------------- Base de Datos Producto KFC ---------------//

const addProductCaesarsToFirestore = async (productData: {
  idProducto: string;
  cantidadProducto: string;
  cantidadReview: string;
  imagenUrl: string;
  nombre: string;
  popularidad: string;
  ingredientes: string;
  precio: string;
}) => {
  try {
    const productDocRef = doc(db, "ProductoCaesars", productData.idProducto);
    await setDoc(productDocRef, {
      ...productData,
      createdAt: new Date().toISOString(),
    });
    console.log("Producto KFC registrada en Firestore");
  } catch (error) {
    console.error("Error al agregar producto KFC a Firestore: ", error);
  }
};

const getProductCaesarsFromFirestore = async (idProducto: string) => {
  try {
    const productsCollection = collection(db, "ProductoCaesars");
    const q = query(productsCollection, where("idProducto", "==", idProducto));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const productData = querySnapshot.docs[0].data();
      return productData;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting product KFC data: ", error);
    return null;
  }
};

const getProductCaesarsFromFirestoreVista = async (
  idProducto: string
): Promise<DocumentData | null> => {
  try {
    const q = query(
      collection(db, "ProductoCaesars"),
      where("idProducto", "==", idProducto)
    );

    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);

    // Verificar si se encontró algún documento
    if (querySnapshot.empty) {
      console.log(
        "No se encontró ningún documento con idProducto:",
        idProducto
      );
      return null;
    }

    // Si se encontró, retornar el primer documento encontrado (asumiendo que idTienda es único)
    const doc = querySnapshot.docs[0];
    return doc.data();
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    throw error; // Manejar el error según sea necesario en tu aplicación
  }
};


//----------------------------------------------------------//
//--------------- lOGICA AÑADIR A FAVORITOS ---------------//
//--------------------------------------------------------//

// Agregar la Tienda a Favoritos en la base de datos
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
// Agregar la Producto a Favoritos en la base de datos
const addProductosFavoriteToFirestore = async (
  userId: string,
  idProducto: string
): Promise<void> => {
  const userFavoritesRef = doc(db, "Favoritos", userId);

  try {
    await setDoc(
      userFavoritesRef,
      { productos: arrayUnion(idProducto) },
      { merge: true }
    );
    console.log("Producto añadida a favoritos");
  } catch (error) {
    console.error("Error al añadir Producto a favoritos: ", error);
    throw error;
  }
};
const removeProductosFavoriteFromFirestore = async (
  userId: string,
  idProducto: string
): Promise<void> => {
  const userFavoritesRef = doc(db, "Favoritos", userId);

  try {
    await setDoc(
      userFavoritesRef,
      { productos: arrayRemove(idProducto) },
      { merge: true }
    );
    console.log("Producto eliminada de favoritos");
  } catch (error) {
    console.error("Error al eliminar Producto de favoritos: ", error);
    throw error;
  }
};

const getFavoriteProductosForUser = async (
  userId: string
): Promise<string[]> => {
  const userFavoritesRef = doc(db, "Favoritos", userId);

  try {
    const userFavoritesDoc = await getDoc(userFavoritesRef);
    if (userFavoritesDoc.exists()) {
      const userFavoritesData = userFavoritesDoc.data();
      if (userFavoritesData) {
        return userFavoritesData.productos || [];
      }
    }
    return [];
  } catch (error) {
    console.error("Error al obtener favoritos del usuario: ", error);
    throw error;
  }
};

//----------------------------------------------------------//
//--------------- lOGICA AÑADIR A CARRITO ---------------//
//--------------------------------------------------------//

const addProductToCart = async (
  userId: string,
  idTienda: string,
  idProducto: string,
  cantidad: number
) => {
  try {
    const cartDocRef = doc(db, "Carrito", userId); // Referencia al documento del carrito del usuario
    const cartDoc = await getDoc(cartDocRef); // Obtener el documento del carrito

    const newProduct = { idProducto, idTienda, cantidad };

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();

      // Comprobar si el producto ya está en el carrito
      const productoExistente = cartData.productos.find(
        (producto: any) => producto.idProducto === idProducto
      );

      if (productoExistente) {
        // Actualizar la cantidad del producto existente
        const productosActualizados = cartData.productos.map((producto: any) =>
          producto.idProducto === idProducto
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto
        );
        await updateDoc(cartDocRef, { productos: productosActualizados });
      } else {
        // Agregar nuevo producto al array de productos
        await updateDoc(cartDocRef, { productos: arrayUnion(newProduct) });
      }
    } else {
      // Crear el documento de carrito con el primer producto
      await setDoc(cartDocRef, { productos: [newProduct] });
    }

    console.log("Producto añadido al carrito");
  } catch (error) {
    console.error("Error al agregar producto al carrito: ", error);
    throw error;
  }
};
const removeProductFromCart = async (userId: string, idProducto: string) => {
  try {
    const cartDocRef = doc(db, "Carrito", userId);
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const productosActualizados = cartData.productos.filter(
        (producto: any) => producto.idProducto !== idProducto
      );

      await updateDoc(cartDocRef, { productos: productosActualizados });
      console.log("Producto eliminado del carrito");
    } else {
      console.error("El documento del carrito no existe");
    }
  } catch (error) {
    console.error("Error al eliminar producto del carrito: ", error);
    throw error;
  }
};
const updateProductQuantityInCart = async (
  userId: string,
  idProducto: string,
  cantidad: number
) => {
  try {
    const cartDocRef = doc(db, "Carrito", userId);
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const productosActualizados = cartData.productos.map((producto: any) =>
        producto.idProducto === idProducto
          ? { ...producto, cantidad }
          : producto
      );

      await updateDoc(cartDocRef, { productos: productosActualizados });
      console.log("Cantidad de producto actualizada en el carrito");
    } else {
      console.error("El documento del carrito no existe");
    }
  } catch (error) {
    console.error(
      "Error al actualizar cantidad de producto en el carrito: ",
      error
    );
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
  getStoreFromFirestoreVista,
  addProductToFirestore,
  getProductFromFirestore,
  getProductFromFirestoreVista,
  addProductosFavoriteToFirestore,
  removeProductosFavoriteFromFirestore,
  getFavoriteProductosForUser,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantityInCart,
  addProductKFCToFirestore,
  getProductKFCFromFirestore,
  getProductKFCFromFirestoreVista,
  addProductCaesarsToFirestore,
  getProductCaesarsFromFirestore,
  getProductCaesarsFromFirestoreVista

};
