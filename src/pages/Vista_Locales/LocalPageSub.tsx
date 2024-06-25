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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const LocalPageSub = ({ idTienda }: { idTienda: string }) => {
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
      <Swiper
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="ml-4">
          <div className="flex justify-center">
            <img
              onClick={handleNavigateToStore}
              className="rounded-xl object-cover h-[150px] w-full "
              src={storeData.imagenUrl}
              alt={`${storeData.nombre} image`}
            />
            <div className="flex absolute items-center gap-x-[90px]">
              <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                <IoTrophyOutline className="mx-[1px] " />
                Ahorros exclusivos
              </div>
              <button onClick={handleToggleFavorite}>
                {isFavorite ? (
                  <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                ) : (
                  <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                )}
              </button>
            </div>
          </div>
          <div className="my-2 ">
            <div className="flex items-center ">
              <div className=" flex-1 text-[15px] font-semibold">
                {storeData.nombre}
              </div>
              <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light order-last">
                {storeData.clasificacion}
              </div>
            </div>
            <div className="flex g:flex-col font-medium leading-5 text-[11px]">
              Costo de envio: {storeData.deliveryPrice}
              <span className=" font-medium leading-5 text-[11px]">
                {storeData.deliveryTime}
              </span>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default LocalPageSub;
