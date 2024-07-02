import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { FaArrowLeft, FaTrash } from "react-icons/fa6";
import { auth } from "../firebase/firebase-config";
import {
  getCarritoProductosForUser,
  getStoreFromFirestore,
  removeFavoriteFromFirestore,
} from "../firebase/firebase-functions";

const CarritoPage: React.FC = () => {
  const history = useHistory();
  const [CarritoProducts, setCarritoProducts] = useState<any[]>([]);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");

  useEffect(() => {
    const fetchCarritoProducts = async () => {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const storeIds = await getCarritoProductosForUser(userId);
        const storeDataPromises = storeIds.map((storeId) =>
          getStoreFromFirestore(storeId)
        );
        const storeData = await Promise.all(storeDataPromises);
        setCarritoProducts(storeData);
      }
    };

    fetchCarritoProducts();
  }, []);

  const handleRemoveFromFavorites = async (storeId: string) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      await removeFavoriteFromFirestore(userId, storeId);
      setCarritoProducts((prevStores) =>
        prevStores.filter((store) => store.id !== storeId)
      );
      setToastAnimation("toast-slide-in");
      setShowRemoveToast(true);

      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
    }
  };

  return (
    <IonContent className="bg-white">
      <IonHeader className="ion-no-border">
        <IonToolbar className="bg-white flex justify-start items-center">
          <button onClick={() => history.goBack()} className="text-Cian_oscuro">
            <FaArrowLeft className="m-2" />
          </button>
          <IonTitle className="text-black font-font-family-bold text-[20px]">
            Carrito
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {CarritoProducts.map((store) => (
          <div
            key={store.id}
            className="flex flex-col px-[10px] py-[10px] font-font-family-light leading-5"
          >
            
          </div>
        ))}
        <div className="mb-16"></div>
      </IonContent>
    </IonContent>
  );
};

export default CarritoPage;
