import React, { useState } from "react";
import { IonContent, IonHeader, IonToast } from "@ionic/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { useFavorites } from "../../../API/FavoritesContext";

import CustomActionSheet from "../../../components/CustomActionSheetProps";

import {
  FaStar,
  FaCircle,
  FaAngleRight,
  FaUserPlus,
  FaArrowLeft,
  FaEllipsisVertical,
} from "react-icons/fa6";

import {
  AiOutlineLike,
  AiOutlinePlus,
  AiFillTag,
  AiOutlineClose,
} from "react-icons/ai";

import { FaSearch } from "react-icons/fa";


import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { HiOutlineShare } from "react-icons/hi";

import { MdInfoOutline } from "react-icons/md";

import Promo from "../../../img/DonutUberOne@3x.png";

import Favorito_1 from "../../../img/El_Señor_De_Los_Bajones/Duo_Sandwich192x188.png";
import Favorito_2 from "../../../img/El_Señor_De_Los_Bajones/Papas_Fritas192x188.png";
import Favorito_3 from "../../../img/El_Señor_De_Los_Bajones/Vienesa_italiana192x188.png";
import Favorito_4 from "../../../img/El_Señor_De_Los_Bajones/Papas_boromir192x188.png";
import Favorito_5 from "../../../img/El_Señor_De_Los_Bajones/Vienesa_italiana_grande.webp";
import Favorito_6 from "../../../img/El_Señor_De_Los_Bajones/Papas_Aragon192x188.png";


import portada_Subway from "../../../img/Subway/Portada_Oferta.png";

const Vista_Producto_S: React.FC = () => {
  // Aquí puedes utilizar ofertaId para cargar la información de la oferta seleccionada
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //add favoritos
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastAnimation, setToastAnimation] = useState("toast-slide-in");

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setToastAnimation("toast-slide-in");
    setShowToast(true);

    setTimeout(() => {
      setToastAnimation("toast-slide-out");
    }, 2000); // Cambia esta duración según tu preferencia
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

  const handleAddToFavorites = (product: any) => {
    if (favorites.some((p) => p.id === product.id)) {
      removeFromFavorites(product.id);
      showToastMessage("Producto eliminado de favoritos");
    } else {
      addToFavorites(product);
      showToastMessage("Producto agregado a favoritos");
    }
  };

  const product_S = {
    id: 53,
    name: "Subway",
    price: "CLP 900",
    image: portada_Subway,
    deliveryTime: "30-45 min",
    rating: 4.5,
  };

  const product_1 = {
    id: 1,
    name: "Duo Sandwich",
    price: "CLP 10,700",
    image: Favorito_1,
    rating: "88%",
  };

  const product_2 = {
    id: 2,
    name: "Papas Clasicas",

    image: Favorito_2,
    price: "CLP 6,200",
    rating: "94%",
  };

  const product_3 = {
    id: 3,
    name: "Vienesa Italiana",
    image: Favorito_3,
    price: "CLP 5,500",
    rating: "93%",
  };

  const product_4 = {
    id: 4,
    name: "Papas Doromir",
    image: Favorito_4,
    price: "CLP 4,800",
    rating: "93%",
  };

  const product_5 = {
    id: 5,
    name: "Vienesa Italiana",
    image: Favorito_5,
    price: "CLP 4,800",
    rating: "93%",
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleActionClick = (action: string) => {
    console.log(action);
    setIsOpen(false);
  };

  return (
    <>
      <IonToast
        className={`font-font-family-light text-[15px] leading-5 ${toastAnimation}`}
        isOpen={showToast}
        onDidDismiss={hideToast}
        message={toastMessage}
        duration={2000} // Duración en milisegundos
        position="top"
        color="success" // Puedes cambiar el color según tus necesidades
        animated={true} // Habilita la animación
      />
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
              className="bg-Negro x:px-[10px]  x:py-[10px]  l:px-[5px] l:py-[5px] g:px-[10px] g:py-[10px] lr:px-[10px] lr:py-[10px]  rounded-full bg-opacity-50"
              onClick={() => handleAddToFavorites(product_S)}
            >
              {favorites.some((p) => p.id === product_S.id) ? (
                <RiHeart3Fill className="text-Blanco x:text-[15px]  l:text-[14px] g:text-[15px] lr:text-[15px]" />
              ) : (
                <RiHeart3Line className="text-Blanco x:text-[15px]  l:text-[14px] g:text-[15px] lr:text-[15px]" />
              )}
            </button>
            <button className="bg-Negro x:px-[10px]  x:py-[10px]  l:px-[5px]  l:py-[5px] g:px-[10px] g:py-[10px] lr:px-[10px] lr:py-[10px] rounded-full bg-opacity-50">
              <FaSearch className=" text-Blanco x:text-[15px] text-[15px] l:text-[14px] lr:text-[15px]" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-Negro x:px-[10px] x:py-[10px] l:px-[5px] l:py-[5px] g:px-[10px] g:py-[10px] lr:px-[10px] lr:py-[10px] rounded-full bg-opacity-50"
            >
              <FaEllipsisVertical className="text-Blanco x:text-[15px] text-[15px] l:text-[14px] lr:text-[15px]" />
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
                        <RiHeart3Line className="mx-2 mr-4 text-[20px]" />
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
        <div className="flex flex-col">
          <div>
            <img
              src={portada_Subway}
              className="object-cover x:h-[140px]  l:h-[130px] g:h-[140px] w-full"
            />
          </div>
          <div className="font-font-family-light font-medium x:text-[21px]  x:mt-2  l:text-[18px] l:mt-1 g:text-[21px] g:mt-2 text-center">
            Subway
          </div>
          <div className="flex items-center justify-center x:space-x-5  l:space-x-3 g:space-x-10">
            <div className="flex-col ">
              <div className="flex font-font-family-light font-normal items-center justify-center x:text-[13px]  l:text-[12px] g:text-[11px]">
                4.5
                <FaStar className="x:text-[11px] x:mx-[4px]  l:text-[8px] l:mx-[2px] g:mx-[4px] g:text-[10px] " />
                <span className="flex items-center font-font-family-light font-light">
                  (4.000+)
                  <FaCircle className="x:mx-[4px] mx-[4px] x:text-[2.7px]  l:mx-[2px] l:text-[2.7px] g:text-[2.7px]" />
                  Costo de envio: CLP 900
                  <FaCircle className="x:mx-[4px] mx-[4px] x:text-[2.7px]  l:mx-[2px] l:text-[2.7px] g:text-[2.7px]" />
                </span>
              </div>
              <div className="flex font-font-family-light font-light x:text-[13px]  l:text-[12px] g:text-[11px] items-center justify-center">
                <FaCircle className="x:mx-[4px]  x:text-[2.7px] l:mx-[2px] l:text-[2.7px] g:mx-[4px] g:text-[2.7px]" />
                1,9 km
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
          <div className="flex justify-center x:space-x-10  l:space-x-10 border border-Gris_muy_claro rounded-md x:mt-4 x:mx-5 x:py-4 l:mt-2 l:py-2 l:mx-2 g:space-x-4 g:mt-4 g:mx-5 g:py-4 font-font-family-light ">
            <div className="flex flex-col text-center x:pr-10 l:pr-5 g:pr-4 border-r border-Gris_muy_claro">
              <div className="font-medium x:text-[12px] l:text-[11px] g:text-[11px] g:leading-4">
                Costos de envio: CLP 1800
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
          <div className="flex flex-col x:mt-5 l:mt-4 g:mt-4  border-b border-b-Gris_muy_claro">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-5 l:text-[23px] l:ml-4 g:text-[20px] g:ml-5 ">
              Articulos destacados
            </div>
            <div>
              <div className="x:mb-4 l:mb-3 g:mb-3">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={2.5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 g:px-3 relative">
                      <img
                        className="rounded-xl object-cover x:h-[140px] l:h-[100px] g:h-[95px] drop-shadow-md"
                        src={product_1.image}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[78px] l:right-[20px] g:bottom-[75px] g:right-0 lr:bottom-[80px] lr:right-[30px]">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:mr-4  x:text-[12px] l:px-1.5 l:mr-2 l:text-[11px] g:px-1.5 g:mr-4 g:text-[10px] items-center text-white  font-font-family-light">
                          #1 de tus favoritos
                        </div>
                      </div>
                      <button
                        className="absolute x:bottom-[4px] x:right-[20px] x:py-2 x:px-2 l:py-1 l:px-1 l:bottom-[4px] l:right-[15px] g:bottom-[4px] g:right-[15px] g:py-1 g:px-1 bg-Blanco shadow-lg rounded-full "
                        onClick={() => handleAddToFavorites(product_1)}
                      >
                        {favorites.some((p) => p.id === product_1.id) ? (
                          <AiOutlineClose className="text-[16px]" />
                        ) : (
                          <AiOutlinePlus className="text-[16px]" />
                        )}
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3 g:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] g:text-[11px] g:leading-4 font-font-family-light font-semibold">
                          {product_1.name}
                          <span>Churrasco</span>
                          <span>Italiano</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px] g:text-[9px] g:leading-4">
                        <div className="flex items-center">
                          {product_1.price}
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px] g:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px] g:mr-[2.5px]" />
                          90% (41)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 g:px-3 relative">
                      <img
                        className="rounded-xl object-cover w-full x:h-[140px] l:h-[100px] g:h-[95px] lr:h-[100px]  drop-shadow-md border-Gris_muy_claro"
                        src={product_2.image}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px] g:bottom-[75px] g:right-0 lr:bottom-20 lr:right-7">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:mr-4  x:text-[12px] l:px-1.5 l:mr-2 l:text-[11px] g:px-1.5 g:mr-4 g:text-[10px] items-center text-white  font-font-family-light">
                          #2 de tus favoritos
                        </div>
                      </div>
                      <button
                        className="absolute x:bottom-[4px] x:right-[20px] x:py-2 x:px-2 l:py-1 l:px-1 l:bottom-[4px] l:right-[15px] g:bottom-[4px] g:right-[15px] g:py-1 g:px-1 bg-Blanco shadow-lg   rounded-full"
                        onClick={() => handleAddToFavorites(product_2)}
                      >
                        {favorites.some((p) => p.id === product_2.id) ? (
                          <AiOutlineClose className="text-[16px]" />
                        ) : (
                          <AiOutlinePlus className="text-[16px]" />
                        )}
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3 g:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] g:text-[11px] g:leading-4 font-font-family-light font-semibold">
                          {product_2.name}
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px] g:text-[9px] g:leading-4">
                        <div className="flex items-center">
                          {product_2.price}
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px] g:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px] g:mr-[2.5px]" />
                          88% (325)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 g:px-3 relative">
                      <img
                        className="rounded-xl object-cover w-full x:h-[140px] l:h-[100px] g:h-[95px] lr:h-[100px] drop-shadow-md"
                        src={product_3.image}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px] g:bottom-[75px] g:right-0 lr:bottom-20 lr:right-7">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:mr-4  x:text-[12px] l:px-1.5 l:mr-2 l:text-[11px] g:px-1.5 g:mr-4 g:text-[10px] items-center text-white  font-font-family-light">
                          #3 de tus favoritos
                        </div>
                      </div>
                      <button
                        className="absolute x:bottom-[4px] x:right-[20px] x:py-2 x:px-2 l:py-1 l:px-1 l:bottom-[4px] l:right-[15px] g:bottom-[4px] g:right-[15px] g:py-1 g:px-1 bg-Blanco shadow-lg   rounded-full"
                        onClick={() => handleAddToFavorites(product_3)}
                      >
                        {favorites.some((p) => p.id === product_3.id) ? (
                          <AiOutlineClose />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3 g:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] g:text-[11px] g:leading-4 font-font-family-light font-semibold">
                          {product_3.name}
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px] g:text-[9px] g:leading-4">
                        <div className="flex items-center">
                          {product_3.price}
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px] g:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px] g:mr-[2.5px]" />
                          94% (147)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 g:px-3 relative">
                      <img
                        className="rounded-xl object-cover w-full x:h-[140px] l:h-[100px] g:h-[95px] lr:h-[100px] drop-shadow-md "
                        src={product_4.image}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px] g:bottom-[75px] g:right-0 lr:bottom-20 lr:right-6">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:mr-4  x:text-[12px] l:px-1.5 l:mr-2 l:text-[11px] g:px-1.5 g:mr-4 g:text-[10px] items-center text-white  font-font-family-light">
                          #4 de tus favoritos
                        </div>
                      </div>
                      <button
                        className="absolute x:bottom-[4px] x:right-[20px] x:py-2 x:px-2 l:py-1 l:px-1 l:bottom-[4px] l:right-[15px] g:bottom-[4px] g:right-[15px] g:py-1 g:px-1 bg-Blanco shadow-lg   rounded-full"
                        onClick={() => handleAddToFavorites(product_4)}
                      >
                        {favorites.some((p) => p.id === product_4.id) ? (
                          <AiOutlineClose />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3 g:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] g:text-[11px] g:leading-4 font-font-family-light font-semibold">
                          {product_4.name}
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px] g:text-[9px] g:leading-4">
                        <div className="flex items-center">
                          {product_4.price}
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px] g:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px] g:mr-[2.5px]" />
                          93% (590)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 g:px-3 relative">
                      <img
                        className="rounded-xl object-cover w-full x:h-[140px] l:h-[100px] g:h-[95px] lr:h-[100px] drop-shadow-md"
                        src={product_5.image}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px] g:bottom-[75px] g:right-0 lr:bottom-20 lr:right-7">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:mr-4  x:text-[12px] l:px-1.5 l:mr-2 l:text-[11px] g:px-1.5 g:mr-4 g:text-[10px] items-center text-white  font-font-family-light">
                          #5 de tus favoritos
                        </div>
                      </div>
                      <button
                        className="absolute x:bottom-[4px] x:right-[20px] x:py-2 x:px-2 l:py-1 l:px-1 l:bottom-[4px] l:right-[15px] g:bottom-[4px] g:right-[15px] g:py-1 g:px-1 bg-Blanco shadow-lg   rounded-full"
                        onClick={() => handleAddToFavorites(product_5)}
                      >
                        {favorites.some((p) => p.id === product_5.id) ? (
                          <AiOutlineClose />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3 g:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] g:text-[11px] g:leading-4 font-font-family-light font-semibold">
                          {product_5.name}
                          <span>Gigante</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px] g:text-[9px] g:leading-4">
                        <div className="flex items-center">
                          {product_5.price}
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px] g:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px] g:mr-[2.5px]" />
                          90% (41)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mt-5 l:mt-4 g:mt-4">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-4 l:text-[24px] l:ml-4 g:text-[20px] g:leading-4 g:ml-4">
              Seleccionado para ti
            </div>
            <div className="flex flex-col x:gap-y-3 pt-2 l:gap-y-3 g:gap-y-3">
              <div className="flex x:gap-x-[120px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[90px] g:gap-x-[65px] g:pb-2 g:mx-1">
                <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                    Duo Sandwich Churrasco
                    <span>Italiano</span>
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                    CLP 10,700
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                    88% (147)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                    Dos churrascos, palta, tomate y<span>mayonesa casera.</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_1}
                    className="rounded-xl object-cover  x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                    <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[119px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[91px] g:gap-x-[68px] g:pb-2 g:mx-1">
                <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                    Vienesa italiana
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                    CLP 5,500
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                    (41)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                    vienesa, tomate picante, palta y
                    <span>mayonesa casera.</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_3}
                    className="rounded-xl object-cover  x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                    <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[91px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[66px] g:gap-x-[45px] g:pb-2 g:mx-1">
                <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                    Papas Boromir
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                    CLP 10,700
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                    93% (560)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                    Papas fritas con salssa de queso
                    <span>Cheddar, tomate y cebollin salteado...</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_4}
                    className="rounded-xl object-cover x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                    <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[130px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[101px] g:gap-x-[77px] g:pb-2 g:mx-1">
                <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                    Papas clasicas
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                    CLP 6,200
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                    88% (325)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                    Porcion papas fritas mediana
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_2}
                    className="rounded-xl object-cover  x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                    <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[105px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[78px] g:gap-x-14 g:pb-2 g:mx-1">
                <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                    Papas Aragon
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                    CLP 10,700
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                    100% (6)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                    Papas fritas, churrasco,
                    <span>champiñon salteado y crema esp...</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_6}
                    className="rounded-xl object-cover  x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                    <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mt-5 l:mt-5 g:mt-5">
            <div className="flex items-center font-font-family-light font-bold x:text-[25px] x:ml-4 l:text-[25px] l:ml-4 g:text-[25px] g:ml-4 g:leading-4">
              <AiFillTag className="text-Verde x:mr-[2px] x:text-[30px] l:mr-[2px] l:text-[28px] g:text-[28px] g:mr-[2px]" />
              2x1
            </div>
            <div className="flex x:gap-x-[119px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[91px] g:gap-x-[68px]  g:pb-2 g:mx-1 g:mt-4">
              <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                  Vienesa italiana
                </div>
                <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                  CLP 5,500
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                  <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                  (41)
                </div>
                <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                  vienesa, tomate picante, palta y<span>mayonesa casera.</span>
                </div>
              </div>
              <div className="flex justify-center relative">
                <img
                  src={Favorito_3}
                  className="rounded-xl object-cover  x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                />
                <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                  <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                </button>
              </div>
            </div>
            <div className="flex x:gap-x-[119px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[91px] g:gap-x-[68px]  g:pb-2 g:mx-1 g:mt-4">
              <div className="flex flex-col x:px-4 l:px-3 g:px-2">
                <div className="flex flex-col font-font-family-light font-medium x:text-[13px] x:leading-4 l:text-[12px] g:text-[11px] g:leading-4">
                  Vienesa italiana
                </div>
                <div className="flex items-center font-font-family-light font-normal x:text-[12px] x:leading-4 l:text-[11px] g:text-[10px] g:leading-3">
                  CLP 5,500
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[4px] l:text-[2.7px] g:text-[2.7px] g:mx-[4px]" />
                  <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px] g:mr-[2px]" />
                  (41)
                </div>
                <div className="flex flex-col font-font-family-light font-light x:text-[11px] x:leading-3 l:text-[10px] g:text-[9px] g:leading-3">
                  vienesa, tomate picante, palta y<span>mayonesa casera.</span>
                </div>
              </div>
              <div className="flex justify-center relative">
                <img
                  src={Favorito_3}
                  className="rounded-xl object-cover  x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px] g:h-[70px] g:w-[100px]"
                />
                <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1 g:bottom-[4px] g:right-[4px] g:py-1 g:px-1">
                  <AiOutlinePlus className="x:text-[10px] g:text-[10px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default Vista_Producto_S;
