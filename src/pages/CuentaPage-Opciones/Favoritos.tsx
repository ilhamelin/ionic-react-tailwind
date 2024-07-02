import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

import {
  getFavoriteStoresForUser,
  getStoreFromFirestore,
  removeFavoriteFromFirestore,
} from "../../firebase/firebase-functions";
import UberOne from "../../img/UberOne.png";
import { auth } from "../../firebase/firebase-config";
import { useHistory } from "react-router-dom";

const Favoritos: React.FC = () => {
  const [favoriteStores, setFavoriteStores] = useState<any[]>([]);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");
  const history = useHistory();

  useEffect(() => {
    const fetchFavoriteStores = async () => {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const storeIds = await getFavoriteStoresForUser(userId);
        const storeDataPromises = storeIds.map((storeId) =>
          getStoreFromFirestore(storeId)
        );
        const storeData = await Promise.all(storeDataPromises);
        setFavoriteStores(storeData);
      }
    };

    fetchFavoriteStores();
  }, []);

  const handleRemoveFromFavorites = async (storeId: string) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      await removeFavoriteFromFirestore(userId, storeId);
      setFavoriteStores((prevStores) =>
        prevStores.filter((store) => store.idTienda !== storeId)
      );
      setToastAnimation("toast-slide-in");
      setShowRemoveToast(true);

      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
    }
  };

  const handleNavigateToStore = (storeId: string) => {
    switch (storeId) {
      case "1":
        history.push("/vistaProducto_Bajon");
        break;
      case "2":
        history.push("/vistaProducto_KFC");
        break;
      case "3":
        history.push("/vistaProducto_Burger_King");
        break;
      case "4":
        history.push("/vistaProducto_McDonals");
        break;
      case "5":
        history.push("/vistaProducto_Little_Pizza");
        break;
      case "6":
        history.push("/vistaProducto_Subway");
        break;
      default:
        console.error("Tienda no encontrada");
    }
  };

  return (
    <>
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        position="top"
        color="danger"
        message="Producto eliminado de favoritos"
        duration={2000}
      />
      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex items-center mt-2 mb-2">
            <button
              className="mx-5  rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="text-Negro text-[20px]" />
            </button>
          </div>
          <IonTitle className="font-font-family-light text-[28px]">
            Favoritos
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="mb-10">
        <div className="px-[10px] ml-3 py-[10px] font-font-family-light leading-5 g:text-[20px]">
          Agregado Reciente
        </div>
        {favoriteStores.map((store) => (
          <div
            key={store.idTienda}
            className="flex flex-col px-[10px] py-[10px] font-font-family-light leading-5"
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center">
              <div className="pr-3">
                <img
                  onClick={() => handleNavigateToStore(store.idTienda)}
                  className="h-[80px] w-auto rounded-xl object-contain shadow-2xl"
                  src={store.imagenUrl}
                  alt={store.nombre}
                />
              </div>
              <div className="flex flex-col flex-grow ">
                <div className="flex items-center">
                  <div className="flex-1">{store.nombre}</div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] x:text-[15px] font-light order-last">
                    {store.clasificacion}
                  </div>
                </div>
                <div className="py-1">
                  <img className="h-[12px]" src={UberOne} alt="UberOne" />
                </div>
                <div className="flex flex-col g:text-[12px] font-light">
                  Costo de Envio: {store.deliveryPrice}
                  <span>{store.deliveryTime}</span>
                </div>
              </div>

              <button
                className="text-Rojo_suave ml-3 "
                onClick={() => handleRemoveFromFavorites(store.idTienda)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div className="mb-20"></div>
      </IonContent>
    </>
  );
};

export default Favoritos;
