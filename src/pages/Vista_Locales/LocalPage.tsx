// StoreView.tsx
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  addFavoriteToFirestore,
  getFavoriteStoresForUser,
  getStoreFromFirestore,
  removeFavoriteFromFirestore,
} from "../../firebase/firebase-functions";
import { FaCircle } from "react-icons/fa6";
import { IoTrophyOutline } from "react-icons/io5";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { auth } from "../../firebase/firebase-config";
import { IonToast } from "@ionic/react";

const StoreView = ({ idTienda }: { idTienda: string }) => {
  const [storeData, setStoreData] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [showAddToast, setShowAddToast] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");

  const userId = auth.currentUser?.uid;
  const history = useHistory();

  useEffect(() => {
    const fetchStoreData = async () => {
      const data = await getStoreFromFirestore(idTienda);
      setStoreData(data);
    };

    fetchStoreData();
  }, [idTienda]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (userId) {
        const favoriteStores = await getFavoriteStoresForUser(userId);
        setIsFavorite(favoriteStores.includes(idTienda));
      }
    };

    fetchFavorites();
  }, [userId, idTienda]);

  const handleToggleFavorite = async () => {
    if (isFavorite) {
      await removeFavoriteFromFirestore(userId!, idTienda);
      setToastAnimation("toast-slide-in");
      setShowRemoveToast(true); // Mostrar notificación cuando se elimina de favoritos
      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
      // Mostrar no
    } else {
      await addFavoriteToFirestore(userId!, idTienda);
      setToastAnimation("toast-slide-in");
      setShowAddToast(true);

      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
      // Mostrar notificación cuando se agrega a favoritos
    }
    setIsFavorite(!isFavorite);
  };

  const handleNavigateToStore = () => {
    switch (idTienda) {
      case "1":
        history.push("/vistaProducto_Bajon");
        break;
      case "4":
        history.push("/vistaProducto_McDonals");
        break;
      default:
        console.error("Tienda no encontrada");
    }
  };

  if (!storeData) {
    return <div></div>;
  }

  return (
    <div>
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showAddToast}
        onDidDismiss={() => setShowAddToast(false)}
        message="Tienda agregada"
        position="top"
        duration={2000}
      />
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        message="Tienda eliminada"
        position="top"
        duration={2000}
      />
      <div className="font-font-family-light">
        <div className="flex justify-center">
          <img
            onClick={handleNavigateToStore}
            className="rounded-xl object-cover h-[190px] w-full mx-4"
            src={storeData.imagenUrl}
            alt={`${storeData.nombre} image`}
          />
          <div className="absolute right-6 my-1">
            <button onClick={handleToggleFavorite}>
              {isFavorite ? (
                <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
              ) : (
                <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
              )}
            </button>
          </div>
        </div>
        <div className=" my-2 mx-4 ">
          <div className="flex items-center">
            <div className="flex-1">{storeData.nombre}</div>
            <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] x:text-[15px] font-light order-last">
              {storeData.clasificacion}
            </div>
          </div>

          <div className="flex items-center text-[14px] font-font-family-light font-light leading-5 g:text-[14px]">
            Costo de envio: {storeData.deliveryPrice}
            <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
            {storeData.deliveryTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreView;
