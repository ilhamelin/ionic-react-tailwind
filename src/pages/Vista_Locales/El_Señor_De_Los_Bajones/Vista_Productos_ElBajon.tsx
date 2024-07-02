import React, { useEffect, useState } from "react";
import { IonContent, IonHeader } from "@ionic/react";
import CustomActionSheet from "../../../components/CustomActionSheetProps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaStar,
  FaCircle,
  FaAngleRight,
  FaUserPlus,
  FaArrowLeft,
  FaEllipsisVertical,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";

import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { HiOutlineShare } from "react-icons/hi";

import { MdInfoOutline } from "react-icons/md";

import Portada from "../../../img/Portada_Señor_de_los_Bajones.png";
import Promo from "../../../img/DonutUberOne@3x.png";
import {
  addFavoriteToFirestore,
  getFavoriteStoresForUser,
  getStoreFromFirestoreVista,
  removeFavoriteFromFirestore,
} from "../../../firebase/firebase-functions";
import { auth } from "../../../firebase/firebase-config";
import { useHistory } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import ProductosListLosBajones from "./ProductosListLosBajones";
import ProductosSliderLosBajones from "./ProductosSliderLosBajones";
import ProductosList2x1LosBajones from "./ProductosList2x1LosBajones";

interface StoreData {
  nombre: string;
  imagenUrl?: string;
  clasificacion: number;
  deliveryPrice: number;
  rating: number;
  categorias: string;
  cantidadReview: string;
  // Agrega otros campos que tu tienda pueda tener
}

const Vista_Productos_ElBajon: React.FC = () => {
  const [storeData, setStoreData] = useState<StoreData | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [showAddToast, setShowAddToast] = useState(false);
  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<any>(null);
  const userId = auth.currentUser?.uid;

  const history = useHistory();

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Fetch store data from Firestore
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const data = await getStoreFromFirestoreVista("1"); // Replace "1" with actual store ID
        if (data) {
          setStoreData(data as StoreData);
        } else {
          console.log("No se encontró el documento en Firestore.");
        }
      } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
      }
    };

    fetchStoreData();
  }, []);

  // Fetch user's favorite stores
  useEffect(() => {
    const fetchFavorites = async () => {
      if (userId && storeData) {
        const favoriteStores = await getFavoriteStoresForUser(userId);
        setIsFavorite(favoriteStores.includes("1")); // Replace "1" with actual store ID
      }
    };

    fetchFavorites();
  }, [userId, storeData]);

  // Fetch user data from Firestore

  // Toggle favorite status
  const handleToggleFavorite = async () => {
    if (isFavorite) {
      await removeFavoriteFromFirestore(userId!, "1"); // Replace "1" with actual store ID
      setToastAnimation("toast-slide-in");
      setShowRemoveToast(true);
      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
    } else {
      await addFavoriteToFirestore(userId!, "1"); // Replace "1" with actual store ID
      setToastAnimation("toast-slide-in");
      setShowAddToast(true);
      setTimeout(() => {
        setToastAnimation("toast-slide-out");
      }, 2000);
    }
    setIsFavorite(!isFavorite);
  };

  // Handle action click
  const handleActionClick = (action: string) => {
    console.log(action);
    setIsOpen(false);
    // Handle action logic here
  };

  // Render loading if store data is not loaded
  if (!storeData) {
    return <div>Loading...</div>;
  }

  const productosIdsArticulosDestacados = new Set([
    "20",
    "21",
    "23",
    "24",
    "22",
  ]);
  const productosIds2x1 = new Set(["24", "25"]);
  const productosIdsSeleccionadoParaTi = new Set([
    "21",
    "25",
    "24",
    "22",
    "26",
  ]);

  return (
    <>
      <div className=" fixed top-0 left-0 w-full z-10 transition-transform duration-300">
        <IonHeader
          class="shadow-none"
          className="bg-transparent flex justify-between items-center sticky top-0 transition duration-300"
        >
          <div className="x:mt-2  x:ml-2  l:mt-1 l:ml-1 g:mt-2 g:ml-2">
            <button
              className="bg-Negro x:px-[10px]  x:py-[10px]  l:px-[8px] l:py-[8px] g:px-[10px] g:py-[10px]  rounded-full bg-opacity-50"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="text-Blanco" />
            </button>
          </div>
          <div className="flex x:gap-x-5  x:px-4  x:mt-[5px]  l:gap-x-4 l:px-3 l:mt-[3px] g:gap-x-5 g:px-4 g:mt-[5px] items-center justify-center ">
            <button
              onClick={handleToggleFavorite}
              className="bg-Negro x:px-[10px]  x:py-[10px]  l:px-[5px] l:py-[5px] g:px-[10px] g:py-[10px] lr:px-[10px] lr:py-[10px]  rounded-full bg-opacity-50"
            >
              {isFavorite ? (
                <RiHeart3Fill className="text-Blanco text-[20px]" />
              ) : (
                <RiHeart3Line className="text-Blanco text-[20px]" />
              )}
            </button>
            <button className="bg-Negro x:px-[10px]  x:py-[10px]  l:px-[5px]  l:py-[5px] g:px-[10px] g:py-[10px] lr:px-[10px] lr:py-[10px] rounded-full bg-opacity-50">
              <FaSearch className=" text-Blanco text-[20px]" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-Negro px-[10px] py-[10px] rounded-full bg-opacity-50"
            >
              <FaEllipsisVertical className="text-Blanco text-[20px]" />
            </button>

            <CustomActionSheet
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              actions={[
                {
                  content: (
                    <>
                      <div className="flex items-center border-b-Gris_muy_claro border-b-2 pb-4">
                        <FaSearch className="mx-2 mr-4" />
                        <span className="font-medium">Busca el negocio</span>
                      </div>
                    </>
                  ),
                  onClick: () => handleActionClick("Busca el negocio"),
                },
                {
                  content: (
                    <>
                      <div className="flex items-center border-b-Gris_muy_claro border-b-2 pb-4">
                        <FaUserPlus className="mx-2 mr-4 text-[20px]" />
                        <span className="font-medium">Pedido grupal</span>
                      </div>
                    </>
                  ),
                  onClick: () => handleActionClick("Pedido grupal"),
                },
                {
                  content: (
                    <>
                      <div className="flex items-center border-b-Gris_muy_claro border-b-2 pb-4">
                        
                        <button
                          onClick={handleToggleFavorite}
                          className="x:px-[10px]  x:py-[10px]  l:px-[5px] l:py-[5px] g:px-[10px] g:py-[10px] lr:px-[10px] lr:py-[10px]  rounded-full bg-opacity-50"
                        >
                          {isFavorite ? (
                            <RiHeart3Fill className="text-Negro text-[20px]" />
                          ) : (
                            <RiHeart3Line className="text-Negro text-[20px]" />
                          )}
                        </button>
                        <span className="font-medium">Agregar a favoritos</span>
                      </div>
                    </>
                  ),
                  onClick: () => handleActionClick("Agregar a favoritos"),
                },
                {
                  content: (
                    <>
                      <div className="flex items-center border-b-Gris_muy_claro border-b-2 pb-4">
                        <HiOutlineShare className="mx-2 mr-4 text-[20px]" />
                        <span className="font-medium">Agregar a favoritos</span>
                      </div>
                    </>
                  ),
                  onClick: () => handleActionClick("Compartir"),
                },
                {
                  content: (
                    <>
                      <div className="flex items-center border-b-Gris_muy_claro border-b-2 pb-4">
                        <MdInfoOutline className="mx-2 mr-4 text-[20px]" />
                        <span className="font-medium">
                          Ver Informacion de la Tienda
                        </span>
                      </div>
                    </>
                  ),
                  onClick: () =>
                    handleActionClick("Ver información de la Tienda"),
                },
              ]}
            />
          </div>
        </IonHeader>
      </div>
      <IonContent fullscreen={true}>
        <div className="flex flex-col ">
          <div>
            <img
              src={storeData.imagenUrl}
              className="object-cover x:h-[140px] l:h-[130px] g:h-[140px] w-full"
            />
          </div>
          <div className="font-font-family-light font-medium x:text-[21px]  x:mt-2  l:text-[18px] l:mt-1 g:text-[21px] g:mt-2 text-center">
            {storeData.nombre}
          </div>
          <div className="flex items-center justify-center x:space-x-5  l:space-x-3 g:space-x-10 ">
            <div className="flex-col ">
              <div className="flex font-font-family-light font-normal items-center justify-center x:text-[13px]  l:text-[12px] g:text-[11px]">
                {storeData.clasificacion}
                <FaStar className="x:text-[11px] x:mx-[4px]  l:text-[8px] l:mx-[2px] g:mx-[4px] g:text-[10px] " />
                <span className="flex items-center font-font-family-light font-light">
                  ({storeData.cantidadReview})
                  <FaCircle className="x:mx-[4px] mx-[4px] x:text-[2.7px]  l:mx-[2px] l:text-[2.7px] g:text-[2.7px]" />
                  Costo de envio: CLP {storeData.deliveryPrice}
                  <FaCircle className="x:mx-[4px] mx-[4px] x:text-[2.7px]  l:mx-[2px] l:text-[2.7px] g:text-[2.7px]" />
                </span>
              </div>
              <div className="flex font-font-family-light font-light x:text-[13px]  l:text-[12px] g:text-[11px] items-center justify-center">
                <FaCircle className="x:mx-[4px]  x:text-[2.7px] l:mx-[2px] l:text-[2.7px] g:mx-[4px] g:text-[2.7px]" />
                4.7 km
              </div>
            </div>
            <div>
              <FaAngleRight className="x:text-[10px]  l:text-[7px] g:text-[10px]" />
            </div>
          </div>
          <div className="flex x:mt-5  x:gap-x-10  l:mt-4 l:gap-x-5 g:mt-5 g:gap-y-3 items-center justify-center mx-2">
            <div>
              <label className=" relative inline-flex cursor-pointer select-none items-center justify-center rounded-2xl bg-white px-1  bg-Gris_muy_claro">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={`flex items-center x:space-x-[6px] x:px-[18px] x:text-sm l:px-[14px] l:space-x-[3px] l:text-sm g:px-[18px] g:text-sm g:line py-1 my-1 rounded-2xl t font-font-family-light ${
                    !isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
                  }`}
                >
                  Entrega
                </span>
                <span
                  className={`flex items-center x:space-x-[6px] x:px-[18px] x:text-sm l:px-[14px] l:space-x-[3px] l:text-sm g:px-[18px] g:text-sm g:line py-1 my-1 rounded-2xl t font-font-family-light ${
                    isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
                  }`}
                >
                  Recoleccion
                </span>
              </label>
            </div>
            <div className="flex items-center bg-Gris_muy_claro x:px-[9px] x:py-[9px]  rounded-2xl space-x-2 l:px-[7px] l:py-[7px] g:px-[9px] g:py-[9px]">
              <div>
                <FaUserPlus />
              </div>
              <div className="font-font-family-light font-normal x:text-[14px] l:text-[14px] l:leading-5 g:text-[13px] g:leading-4">
                pedido grupal
              </div>
            </div>
          </div>
          <div className="flex justify-center x:space-x-10  l:space-x-10 border border-Gris_muy_claro rounded-md mt-4 py-2 mx-4 g:space-x-4 g:mt-4 g:mx-5 g:py-4 font-font-family-light ">
            <div className="flex flex-col text-center x:pr-10 l:pr-5 g:pr-4 border-r border-Gris_muy_claro">
              <div className="font-medium x:text-[12px] l:text-[11px] g:text-[11px] g:leading-4">
                Costos de envio: CLP {storeData.deliveryPrice}
              </div>
              <div className="font-light x:text-[11px] l:text-[10px] g:text-[10px] g:leading-4">
                Precios y Tarifa
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="font-medium x:text-[12px] l:text-[11px] g:text-[11px] g:leading-4">
                30-45 min
              </div>
              <div className="font-light x:text-[11px] l:text-[10px] g:text-[10px] g:leading-4">
                Tiempo de entrega
              </div>
            </div>
          </div>

          <div className="flex justify-center border-none rounded-md x:mx-5 x:mt-5 x:space-x-[86px] l:mt-4 l:mx-4 l:space-x-[72px] g:mx-5 g:mt-5 g:space-x-[32px] bg-PapayaWhip font-font-family-light">
            <div className="flex flex-col x:pt-2 x:pl-2 l:pt-2 l:pl-2 g:pl-2 g:pt-2">
              <span className="font-semibold x:text-[12px] l:text-[11px] l:leading-3 g:text-[10px] g:leading-3">
                Sin Costo de envio y Hasta un 5%
              </span>
              <span className="font-semibold x:text-[12px] l:text-[11px] g:text-[10px] g:leading-4">
                de Ahorro con uber One
              </span>
              <div className="x:mt-4 l:mt-3 x:text-[13px] l:text-[12px] l:leading-4 g:text-[11px] g:mt-4 text-center font-normal">
                <div className="bg-Blanco rounded-lg x:w-[120px] x:h-auto l:w-[105px] l:h-auto g:w-[100px] l:py-1 ">
                  1 mes sin costo
                </div>
              </div>
            </div>
            <div>
              <img
                src={Promo}
                className="object-cover x:h-[100px] x:w-[100px] l:h-[90px] l:w-[90px] g:h-[80px] g:w-[80px] rounded-r-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4  border-b border-b-Gris_muy_claro">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-5 l:text-[23px] l:ml-4 g:text-[20px] g:ml-5 ">
              Articulos destacados
            </div>
            <div>
              <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                pagination={{ clickable: true }}
              >
                {[...productosIdsArticulosDestacados].map((idProducto) => (
                  <SwiperSlide key={idProducto}>
                    <ProductosSliderLosBajones
                      idProducto={idProducto}
                      idTienda={""}
                      userId={""}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col mt-4 border-b border-b-Gris_muy_claro">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-4 l:text-[24px] l:ml-4 g:text-[20px] g:leading-4 g:ml-4">
              2X1
            </div>
            <div className="mt-3 mx-4">
              {[...productosIds2x1].map((idProducto) => (
                <div key={idProducto}>
                  <ProductosList2x1LosBajones idProducto={idProducto} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col x:mt-5 l:mt-4 g:mt-4">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-4 l:text-[24px] l:ml-4 g:text-[20px] g:leading-4 g:ml-4">
              Seleccionado para ti
            </div>
            <div className="mt-3 mx-4">
              {[...productosIdsSeleccionadoParaTi].map((idProducto) => (
                <div key={idProducto}>
                  <ProductosListLosBajones idProducto={idProducto} />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-5"></div>
        </div>
      </IonContent>
    </>
  );
};

export default Vista_Productos_ElBajon;
