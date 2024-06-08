import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useFavorites } from "../../API/FavoritesContext";
import UberOne from "../../img/UberOne.png";

const Favoritos: React.FC = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [showAddToast, setShowAddToast] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);

  const handleAddToFavorites = (product: any) => {
    addToFavorites(product);
    setShowAddToast(true);
  };

  const handleRemoveFromFavorites = (productId: string) => {
    removeFromFavorites(productId);
    setShowRemoveToast(true);
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <button
            className="px-[10px] py-[10px] rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="text-Negro text-[25px]" />
          </button>
          <IonTitle className="font-font-family-light text-[28px]">
            Favoritos
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="px-[10px] py-[10px] font-font-family-light leading-5 g:text-[20px]">
          Agregado Reciente
        </div>
        {favorites.map((product) => (
          <div
            key={product.id}
            className="flex flex-col px-[10px] py-[10px] font-font-family-light leading-5"
          >
            <div className="flex items-center">
              <div className="pr-3">
                <img
                  className="h-[80px] w-[110px] rounded-xl object-contain shadow-2xl"
                  src={product.image}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between g:gap-x-[80px] g:text-[14px] font-semibold">
                  {product.name}
                  <span className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[12px] font-normal">
                    4.4
                  </span>
                </div>
                <div className="py-1">
                  <img className="h-[12px]" src={UberOne} alt="UberOne" />
                </div>
                <div className="flex flex-col g:text-[12px] font-light">
                  Costo de Envio {product.price}{" "}
                  <span>{product.deliveryTime}</span>
                </div>
              </div>
              <button
                className="text-red-500 ml-3"
                onClick={() => handleRemoveFromFavorites(product.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </IonContent>
      <IonToast
        isOpen={showAddToast}
        onDidDismiss={() => setShowAddToast(false)}
        message="Producto agregado a favoritos"
        duration={2000}
      />
      <IonToast
        isOpen={showRemoveToast}
        onDidDismiss={() => setShowRemoveToast(false)}
        message="Producto eliminado de favoritos"
        duration={2000}
      />
    </>
  );
};

export default Favoritos;
