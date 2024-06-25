import { db } from "./firebaseConfig"; // Asegúrate de tener configurado Firebase

export const getTiendasFromFirestore = async () => {
  const tiendasSnapshot = await db.collection("tiendas").get();
  return tiendasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductosFromFirestore = async (tiendaId) => {
  const productosSnapshot = await db.collection("productos").where("tiendaId", "==", tiendaId).get();
  return productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
