import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../theme/tailwind.css";

// Import Componentes
import Interruptor from "../components/Interruntor";
import { useFavorites } from "../API/FavoritesContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//imagenes jpg/png/etc..
import hamburger from "../img/hamburguesa64px.png";
import supermercado from "../img/tienda-de-comestibles64px.png";
import sushi from "../img/sushi64px.png";
import pizza from "../img/pizza64px.png";
import china from "../img/fideos64px.png";
import sandwich from "../img/sandwich64px.png";
import farmacia from "../img/farmacia64px.png";
import polloFrito from "../img/pollo-frito64px.png";
import americano from "../img/hot-dog64px.png";
import oferta from "../img/oferta2.png";
import oferta2 from "../img/Oferta3.png";
import oferta3 from "../img/oferta4.png";
import portada_LittleCaesars from "../img/oferta5.png";
import portada_KFC from "../img/oferta6.png";
import portada_BurgerKing from "../img/Burger_King/oferta7.1.png";
import portada_Terragona from "../img/oferta8.png";
import portada_Subway from "../img/Subway/Portada_Oferta.png";
import portada_Wendy from "../img/Wendy/Portada_Wendy.png";
import portada_pizzaria from "../img/Pizzería_Pizzola/Portada_Pizzaria_Pizzola.png";
import portada_iro_sushi from "../img/Iro_Sushi/Portada_iro_sushi.png";

import ahumada from "../img/logo-asuntos-corporativos-ahumad.png";
import superZoo from "../img/superzoo.png";
import casaIdeas from "../img/Casaideas.png";
import paris from "../img/parisLogo.png";
import easy from "../img/easyLogo.png";
import jumbo from "../img/JumboLogo.png";
import Decathlon from "../img/Decathlon.png";
import salcobrand from "../img/Salcobrand.png";
import liquido from "../img/Liquido.png";
import express from "../img/comida-enlatada64px.png";

// componentes ionic
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonToast,
} from "@ionic/react";



// import de iconos
import {
  RiNotification3Line,
  RiHeart3Line,
  RiHeart3Fill,
  RiArrowDropDownLine,
} from "react-icons/ri";
import { IoMdPricetag } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { searchCircleOutline } from "ionicons/icons";
import { FaCircle } from "react-icons/fa6";


const HomePage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/promociones");
  };

  const handleProductoBajon = () => {
    history.push("/vistaProducto_Bajon");
  };

  const handleProductoLittlePizza = () => {
    history.push("/vistaProducto_Little_Pizza");
  };

  const handleProductoMcDonals = () => {
    history.push("/vistaProducto_McDonals");
  };

  const handleProductoSubway = () => {
    history.push("/vistaProducto_Subway");
  };
  
  const handleProductoBurgerKing = () => {
    history.push("/vistaProducto_Burger_King");
  };
  
  const handleProductoKFC = () => {
    history.push("/vistaProducto_KFC");
  };

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
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
    }, 2000);
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

  const product_B = {
    id: 51,
    name: "El Señor de los Bajones",
    price: "CLP 1,600",
    image: oferta,
    deliveryTime: "30-45 min",
    rating: 4.4,
  };

  const product_M = {
    id: 52,
    name: "McDonal´s",
    price: "CLP 1,500",
    image: oferta2,
    deliveryTime: "30-45 min",
    rating: 4.6,
  };

  const product_S = {
    id: 53,
    name: "Subway",
    price: "CLP 900",
    image: portada_Subway,
    deliveryTime: "30-45 min",
    rating: 4.5,
  };

  const product_L = {
    id: 54,
    name: "Little Caesars Pizza",
    price: "CLP 1300",
    image: portada_LittleCaesars,
    deliveryTime: "30-45 min",
    rating: 4.6,
  };

  const product_KFC = {
    id: 55,
    name: "KFC",
    price: "CLP 900",
    image: portada_KFC,
    deliveryTime: "30-45 min",
    rating: 4.4,
  };
  

  const product_BK = {
    id: 56,
    name: "Burger King",
    price: "CLP 2200",
    image: portada_BurgerKing,
    deliveryTime: "30-45 min",
    rating: 4.3,
  };

  const product_TG = {
    id: 57,
    name: "Terragona",
    price: "CLP 2200",
    image: portada_Terragona,
    deliveryTime: "30-45 min",
    rating: 4.3,
  };

  const product_W = {
    id: 58,
    name: "Wendy",
    price: "CLP 1100",
    image: portada_Wendy,
    deliveryTime: "30-45 min",
    rating: 4.5,
  };

  const product_PP = {
    id: 58,
    name: "Pizzería Pizzola",
    price: "CLP 1700",
    image: portada_pizzaria,
    deliveryTime: "30-45 min",
    rating: 4.3,
  };

  const product_IS = {
    id: 59,
    name: "Iro Sushi",
    price: "CLP 1300",
    image: portada_iro_sushi,
    deliveryTime: "30-45 min",
    rating: 4.5,
  };
  

  //ChatBot

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

      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex ">
            <div className="ml-4 mr-3">
              <span className=" font-font-family-light font-medium leading-5 g:text-[12px] ">
                Entregar ahora
              </span>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px]">
                Direccion: Hola
              </div>
            </div>
            <div className="flex flex-auto items-center justify-end">
              <nav className="flex items-center gap-x-4">
                <button
                  onClick={handleClick}
                  className="relative bg-Gris_muy_claro py-2 px-2 rounded-full "
                >
                  <RiNotification3Line className="text-black" />
                  <span
                    hidden
                    className="absolute -top-1 -right-1 bg-Cian_oscuro py-1 px-[6px] rounded-full box-content text-[9px] font-bold text-white"
                  ></span>
                </button>
                <div className="mr-2">
                  <Interruptor />
                </div>
              </nav>
            </div>
          </div>
        </IonToolbar>
        <IonToolbar className="flex flex-col items-center justify-center px-2">
          <div className="w-full">
            <IonIcon
              hidden
              icon={searchCircleOutline}
              className="absolute right top-4 justify-center text-Gris_paloma text-2xl"
            />
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Buscar Uber Eats"
              className="w-full px-4 py-2 border-none bg-Mercurio   placeholder:text-Gris_paloma placeholder:font-font-family-light placeholder:font-normal placeholder:text-[15px] text-Negro font-font-family-light font-normal text-[15px] rounded-2xl shadow-sm focus:outline-none focus:ring-0 "
            />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="font-font-family-light">
        <div className="mt-2 items-center text-center ">
          <Swiper
            className="l:w-full x:w-full md:w-[800px] g:w-auto lr:px-4"
            slidesPerView={4.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 4.5,

                width: 400,
              },

              393: {
                slidesPerView: 5,
              },

              768: {
                slidesPerView: 5.5,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={hamburger} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Hamburguesa
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={supermercado} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Supermercado
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={sushi} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Sushi
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={pizza} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Pizza
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={china} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Comida China
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={express} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Express
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={sandwich} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Sandwich
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={farmacia} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Farmacia
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={polloFrito} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Pollo
              </div>
            </SwiperSlide>
            <SwiperSlide className="mx-1">
              <div className="flex justify-center">
                <div className="mx-[5px] py-[13px] px-[8px] rounded-full ">
                  <img src={americano} />
                </div>
              </div>
              <div className="font-font-family-light font-semibold leading-5 lr:text-[10px] g:text-[12px] mt-1 l:text-[11px] ">
                Americana
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className=" mt-3 md:mt-5 text-center">
          <Swiper
            width={400}
            className=""
            spaceBetween={10}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 5,
                width: 450,
                height: 40,
              },
              375: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              393: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              425: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide className="px-4">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center py-2">
                <IoMdPricetag className="mr-1" />
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px]">
                  Oferta
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center py-2 px-1 ">
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px]">
                  Menos de 30 min
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center py-2 ">
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px]">
                  Costos
                </div>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-Gris_muy_claro  rounded-2xl items-center justify-center gap-x-0 py-2 ">
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px]">
                  Costo de envio
                </div>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-2 py-2 px-2">
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px]">
                  Paga con Pluxee
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-1">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-1 py-2">
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px]">
                  Tipo de Dieta
                </div>
                <RiArrowDropDownLine className="object-cover text-[20px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center py-2">
                <LiaMedalSolid className="text-[15px] mr-1" />
                <div className="font-font-family-light font-semibold leading-5 g:text-[12px] l:text-[12px] x:text-[12px]">
                  Mayor Calificacion
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col md:grid-cols-2 mt-3 border-b border-Plata/50 md:gap-x-2 ">
          <div className="font-font-family-light">
            <div className="flex justify-center">
              <img
                onClick={handleProductoBajon}
                className="rounded-xl object-cover h-[190px] w-auto l:w-[360px] x:w-[410px] xm:w-[470px] g:w-[310px]"
                src={product_B.image}
              />
              <div className="flex absolute items-center xm:gap-x-[65px] x:gap-x-[125px] l:gap-x-[80px] g:gap-x-[30px]">
                <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white x:text-[12px] x:leading-5 text-Blanco">
                  <IoTrophyOutline className="mx-[2px] " />
                  Oferta superior
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                  <span>Gasta CLP 10.000, Ahor...</span>
                </div>
                <button onClick={() => handleAddToFavorites(product_B)}>
                  {favorites.some((p) => p.id === product_B.id) ? (
                    <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                  ) : (
                    <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                  )}
                </button>
              </div>
            </div>
            <div className=" mx-2 my-2 x:mx-2 lr:mx-4 ">
              <div className="">
                <div className="flex x:text-[17px] x:leading-5 g:text-[18px] l:text-[17px] l:leading-5 font-font-family-light font-medium x:gap-x-[195px] l:gap-x-[145px] md:gap-x-[150px] xm:gap-x-[350px] g:gap-x-[75px]">
                  {product_B.name}
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] x:text-[15px] font-light ">
                    {product_B.rating}
                  </div>
                </div>
                <div className="flex items-center text-[14px] font-font-family-light font-light leading-5 g:text-[14px]">
                  Costo de envio: {product_B.price}
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                  30-45 min
                </div>
                <div className=" text-justify"></div>
              </div>
            </div>
          </div>

          <div className="font-font-family-light">
            <div className="flex justify-center">
              <img
                onClick={handleProductoMcDonals}
                className="rounded-xl object-cover h-[190px] w-auto l:w-[360px] x:w-[410px] xm:w-[470px] g:w-[310px]"
                src={product_M.image}
              />
              <div className="flex absolute items-center xm:gap-x-[65px] x:gap-x-[260px] l:gap-x-[210px] g:gap-x-[160px]">
                <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white x:text-[12px] x:leading-5 text-Blanco">
                  <IoTrophyOutline className="mx-[2px] " />
                  Ahorro exclusivos
                </div>
                <button onClick={() => handleAddToFavorites(product_M)}>
                  {favorites.some((p) => p.id === product_M.id) ? (
                    <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                  ) : (
                    <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                  )}
                </button>
              </div>
            </div>
            <div className=" mx-2 my-2 x:mx-2 lr:mx-4">
              <div className="">
                <div className="flex x:text-[17px] x:leading-5 g:text-[18px] l:text-[17px] l:leading-5 font-font-family-light font-medium x:gap-x-[290px] l:gap-x-[240px] g:gap-x-[180px]">
                  {product_M.name}
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] x:text-[15px] font-light">
                    {product_M.rating}
                  </div>
                </div>
                <div className="flex items-center text-[14px] font-font-family-light font-light leading-5 g:text-[14px]">
                  Costo de envio: {product_M.price}
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                  30-45 min
                </div>
                <div className=" text-justify"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-Plata/50">
          <div className="ml-2 lr:ml-4">
            <h3 className="font-font-family-light font-bold leading-8 normal-nums text-[24px]">
              Ofertas de Hoy
            </h3>
          </div>

          <Swiper
            slidesPerView={1.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="pl-4">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_M.image}
                  onClick={handleProductoMcDonals}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_M)}>
                    {favorites.some((p) => p.id === product_M.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[140px] ">
                  <div className="text-[15px] font-semibold">
                    {product_M.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_M.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_M.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_B.image}
                  onClick={handleProductoBajon}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_B)}>
                    {favorites.some((p) => p.id === product_B.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[50px] ">
                  <div className="text-[15px] font-semibold">
                    {product_B.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_B.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_B.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_BK.image}
                  onClick={handleProductoBurgerKing}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_BK)}>
                    {favorites.some((p) => p.id === product_BK.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[135px] ">
                  <div className="text-[15px] font-semibold">
                    {product_BK.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_BK.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_BK.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_KFC.image}
                  onClick={handleProductoKFC}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_KFC)}>
                    {favorites.some((p) => p.id === product_KFC.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[190px] ">
                  <div className="text-[15px] font-semibold">
                    {product_KFC.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_KFC.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_KFC.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_L.image}
                  onClick={handleProductoLittlePizza}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_L)}>
                    {favorites.some((p) => p.id === product_L.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[80px] ">
                  <div className="text-[15px] font-semibold">
                    {product_L.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_L.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_L.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_S.image}
                  onClick={handleProductoMcDonals}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_S)}>
                    {favorites.some((p) => p.id === product_S.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[160px] ">
                  <div className="text-[15px] font-semibold">
                    {product_S.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_S.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_S.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_TG.image}
                  onClick={handleProductoMcDonals}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_TG)}>
                    {favorites.some((p) => p.id === product_TG.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[145px] ">
                  <div className="text-[15px] font-semibold">
                    {product_TG.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_TG.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_TG.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_W.image}
                  onClick={handleProductoMcDonals}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_W)}>
                    {favorites.some((p) => p.id === product_W.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[170px] ">
                  <div className="text-[15px] font-semibold">
                    {product_W.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_W.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_W.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-cover h-[150px] w-full "
                  src={product_PP.image}
                  onClick={handleProductoMcDonals}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_PP)}>
                    {favorites.some((p) => p.id === product_PP.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[105px] ">
                  <div className="text-[15px] font-semibold">
                    {product_PP.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_PP.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_PP.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex justify-center">
                <img
                  className="rounded-xl object-none h-[150px] w-full "
                  src={product_IS.image}
                  onClick={handleProductoMcDonals}
                />
                <div className="flex absolute items-center gap-x-[90px]">
                  <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-md px-1 text-[12px] items-center text-Blanco">
                    <IoTrophyOutline className="mx-[1px] " />
                    Ahorros exclusivos
                  </div>
                  <button onClick={() => handleAddToFavorites(product_IS)}>
                    {favorites.some((p) => p.id === product_IS.id) ? (
                      <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                    ) : (
                      <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                <div className="flex gap-x-[155px] ">
                  <div className="text-[15px] font-semibold">
                    {product_IS.name}
                  </div>
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-light">
                    {product_IS.rating}
                  </div>
                </div>
                <div className="flex g:flex-col font-medium leading-5 text-[11px]">
                  Costo de envio: {product_IS.price}
                  <span className=" font-medium leading-5 text-[11px]">
                    30-45 min
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="border-b border-Plata/50 ">
          <div className="g:ml-2 lr:ml-4">
            <h3 className="font-font-family font-bold leading-8 normal-nums text-[24px]">
              Tiendas cerca de ti
            </h3>
          </div>
          <div>
            <div className="items-center text-center ">
              <Swiper
                className="px-4 l:w-full x:w-full md:w-[800px] g:w-auto lr:px-4"
                slidesPerView={4.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  320: {
                    slidesPerView: 4.5,

                    width: 400,
                  },

                  768: {
                    slidesPerView: 5.5,
                    spaceBetween: 0,
                  },
                }}
              >
                <SwiperSlide className="mb-5">
                  <div className="flex justify-center">
                    <div className="g:mx-[10px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full"
                        src={ahumada}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold g:text-[11px]">
                    <div>Farmacias...</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[10px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full"
                        src={superZoo}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>SuperZoo</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[10px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full"
                        src={casaIdeas}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Casaideas</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[10px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50 ">
                      <img
                        className="object-cover h-auto w-auto rounded-full "
                        src={paris}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Paris</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[8px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full "
                        src={easy}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Easy</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[8px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full "
                        src={jumbo}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Jumbo</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[8px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full "
                        src={Decathlon}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Decathlon</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[8px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full "
                        src={salcobrand}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Salcobrand</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <div className="g:mx-[9px] g:py-[0px] g:px-[0px] rounded-full border-[2px] border-Plata/50">
                      <img
                        className="object-cover h-auto w-auto rounded-full "
                        src={liquido}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold text-[11px] g:text-[11px]">
                    <div>Liquidos</div>
                    <span>20-40 min</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:grid-cols-2 mt-3 border-b border-Plata/50 md:gap-x-2 ">
          <div className="font-font-family-light">
            <div className="flex justify-center">
              <img
                onClick={handleProductoSubway}
                className="rounded-xl object-cover h-[190px] w-auto l:w-[360px] x:w-[410px] xm:w-[470px] g:w-[310px]"
                src={product_S.image}
              />
              <div className="flex absolute items-center xm:gap-x-[65px] x:gap-x-[250px] l:gap-x-[200px] g:gap-x-[155px]">
                <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white x:text-[12px] x:leading-5 text-Blanco">
                  <IoTrophyOutline className="mx-[2px]" />
                  Ahorros esclusivos
                </div>
                <button onClick={() => handleAddToFavorites(product_S)}>
                  {favorites.some((p) => p.id === product_S.id) ? (
                    <RiHeart3Fill className="text-Rojo_oscuro text-[20px]" />
                  ) : (
                    <RiHeart3Line className="text-Rojo_oscuro text-[20px]" />
                  )}
                </button>
              </div>
            </div>
            <div className=" mx-2 my-2 lr:mx-4">
              <div className="">
                <div className="flex x:text-[17px] x:leading-5 g:text-[18px] l:text-[17px] l:leading-5 font-font-family-light font-medium x:gap-x-[315px] l:gap-x-[265px] g:gap-x-[210px]">
                  {product_S.name}
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] x:text-[15px] font-light">
                    4.5
                  </div>
                </div>
                <div className="flex items-center text-[14px] font-font-family-light font-light leading-5 g:text-[14px]">
                  Costo de envio: {product_S.price}
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px] g:mx-[4px] g:text-[2.7px]" />
                  30-45 min
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div className="mt-[100px]"></div>
      </IonContent>
    </>
  );
};

export default HomePage;
