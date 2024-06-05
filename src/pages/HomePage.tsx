import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

// Import IONIC Components
import { Route, Redirect } from "react-router";
import { IonReactRouter } from "@ionic/react-router";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

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
import oferta4 from "../img/oferta5.png";
import oferta6 from "../img/oferta6.png";
import oferta7 from "../img/oferta7.1.png";
import oferta8 from "../img/oferta8.png";

import ahumada from "../img/logo-asuntos-corporativos-ahumad.png";
import superZoo from "../img/superzoo.png";
import casaIdeas from "../img/Casaideas.png";
import paris from "../img/parisLogo.png";
import easy from "../img/easyLogo.png";
import jumbo from "../img/JumboLogo.png";
import Decathlon from "../img/Decathlon.png";
import salcobrand from "../img/Salcobrand.png";
import botilleria from "../img/Botilleria.png";
import liquido from "../img/Liquido.png";

import express from "../img/comida-enlatada64px.png";

// componentes ionic
import { IonContent, IonHeader, IonToolbar, IonIcon } from "@ionic/react";

// import de iconos
import {
  RiNotification3Line,
  RiHeart3Line,
  RiArrowDropDownLine,
} from "react-icons/ri";
import { IoMdPricetag } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { searchCircleOutline } from "ionicons/icons";

import "../theme/tailwind.css";

import Interruptor from "../components/Interruntor";

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/promociones");
  };

  const handleProducto = () => {
    history.push("/vistaProducto_1");
  };

  const handleProducto1 = () => {
    history.push("/vistaProducto_2");
  };

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex ">
            <div className="ml-4 mr-3">
              <span className=" font-font-family-light font-medium leading-5 g:text-[12px] ">
                Entregar ahora
              </span>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px]">
                Direccion: *****
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
            className="l:w-full x:w-full md:w-[800px] g:w-auto"
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
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px] py-[13px] px-[13px] rounded-full bg-Naranja_oscuro_desaturado ">
                  <img src={hamburger} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px] ">
                Hamburguesa
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Naranja_suave ">
                  <img src={supermercado} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px]">
                Supermercado
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Rojo_claro ">
                  <img src={sushi} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px] ">
                Sushi
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Amarillo_intenso ">
                  <img src={pizza} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px] ">
                Pizza
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Rojo_suave ">
                  <img src={china} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px] ">
                Comida China
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Cian_suave ">
                  <img src={express} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px]">
                Express
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Naranja_claro ">
                  <img src={sandwich} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px]">
                Sandwich
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Amarillo_vivo ">
                  <img src={farmacia} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px]">
                Farmacia
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Rojo_oscuro ">
                  <img src={polloFrito} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px]">
                Pollo
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-Naranja_oscuro_desaturado ">
                  <img src={americano} />
                </div>
              </div>
              <div className="font-font-family-light font-medium leading-5 g:text-[12px] mt-1 l:text-[11px] md:text-[15px] ">
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
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-2 py-2">
                <IoMdPricetag className=" object-cover " />
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px]">
                  Oferta
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-2 py-2 px-1 ">
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px]">
                  Menos de 30 min
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-0 py-2 px-2">
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px]">
                  Costos
                </div>
                <RiArrowDropDownLine className="object-cover text-[20px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-1">
              <div className="flex bg-Gris_muy_claro  rounded-2xl items-center justify-center gap-x-0 py-2 ">
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px]">
                  Costo de envio
                </div>
                <RiArrowDropDownLine className="object-cover text-[20px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-2 py-2 px-2">
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px]">
                  Paga con Pluxee
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-2">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center gap-x-1 py-2">
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px]">
                  Tipo de Dieta
                </div>
                <RiArrowDropDownLine className="object-cover text-[20px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto h-auto">
              <div className="flex bg-Gris_muy_claro rounded-2xl items-center justify-center g:gap-x-[5px] py-2">
                <LiaMedalSolid className="object-cover text-[15px]" />
                <div className="font-font-family-light font-medium leading-5 g:text-[12px] l:text-[12px] x:text-[12px]">
                  Mayor Calificacion
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col md:grid-cols-2 mt-3 border-b border-Plata/50 md:gap-x-2">
          <div className="md:flex md:ml-2">
            <div className="flex justify-center" onClick={handleProducto}>
              <img
                className="rounded-xl object-cover h-[190px] w-auto l:w-[360px] x:w-[410px] xm:w-[470px] g:w-[310px]"
                src={oferta}
              />
              <div className="flex absolute items-center xm:gap-x-[65px] ">
                <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                  <IoTrophyOutline className="mx-[2px] " />
                  Oferta superior -
                  <span className="ml-1">Gasta CLP 10.000, Ahor...</span>
                </div>
                <div className="ml-[132px] l:ml-[80px] x:ml-[135px] md:ml-[126px] g:ml-[30px] text-end">
                  <RiHeart3Line className="text-Rojo_suave" />
                </div>
              </div>
            </div>
            <div className=" mx-2 my-2">
              <div className="">
                <div className="flex text-[19px]  g:text-[18px] font-font-family-light font-medium leading-6 gap-x-[296px] l:gap-x-[245px] x:gap-x-[300px] md:gap-x-[150px] xm:gap-x-[350px] g:gap-x-[190px]">
                  Sabor X2
                  <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] font-semibold">
                    4.4
                  </div>
                </div>
                <div className="text-[14px] font-font-family-light font-normal leading-5 g:text-[14px]">
                  Costo de envio: CLP 1600 * 30-45 min
                </div>
                <div className=" text-justify"></div>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-row-reverse mb-3 mt-3 mb:ml-2 ">
            <div className="flex justify-center " onClick={handleProducto1}>
              <img
                className="rounded-xl object-cover h-[190px] w-[414px] l:w-[360px] x:w-[410px] md:w-[410px] xm:w-[470px] g:w-[310px]"
                src={oferta2}
              />
              <div className="flex absolute items-center gap-x-[260px] l:gap-x-[310px] x:gap-x-[360px] md:gap-x-[260px] xm:gap-x-[320px]">
                <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                  <IoTrophyOutline className="mx-[2px] " />
                  Ahorros exclusivos
                </div>
                <div className="text-end g:ml-[-100px]">
                  <RiHeart3Line className="text-Rojo_suave" />
                </div>
              </div>
            </div>
            <div className="mx-2 my-2 mb:ml-2">
              <div className="flex text-[19px] g:text-[18px] font-font-family-light font-medium leading-6 gap-x-[275px] l:gap-x-[220px] x:gap-x-[270px] md:gap-x-[120px] xm:gap-x-[330px] g:gap-x-[170px]">
                McDonald's
                <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[15px] font-semibold">
                  4.6
                </div>
              </div>
              <div>
                <div className="text-[14px] font-font-family-light font-normal leading-5 g:text-[14px]">
                  Costo de envio: CLP 2100 * 30-45 min
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-Plata/50">
          <div className="ml-2">
            <h3 className="font-font-family font-bold leading-8 normal-nums text-[24px]">
              Ofertas de Hoy
            </h3>
          </div>
          <div>
            <Swiper
              className="px-4 l:px-2 g:px-2"
              slidesPerView={1.5}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img
                    className="rounded-xl object-cover x:w-[300px] x:h-[140px] l:h-[140px]"
                    src={oferta3}
                  />
                  <div className="flex absolute items-center gap-x-[130px] l:gap-x-[80px] x:gap-x-[105px]  xm:gap-x-[140px] g:gap-x-[45px] ">
                    <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white l:-ml-1">
                      <IoTrophyOutline className="mx-[2px] " />
                      Ahorros exclusivos
                    </div>
                    <div className="text-end">
                      <RiHeart3Line className="text-Rojo_suave" />
                    </div>
                  </div>
                </div>
                <div className="mx-2 my-2 l:mx-0 xm:mx-2.5 g:mx-0">
                  <div className="flex gap-x-[150px] l:gap-x-[120px] x:gap-x-[150px] xm:gap-x-[190px] g:gap-x-[80px]">
                    <div className="text-[15px] font-semibold">McDonald's</div>
                    <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-semibold">
                      4.6
                    </div>
                  </div>
                  <div className="flex g:flex-col font-font-family-light font-medium leading-5 g:text-[11px]">
                    Costo de envio: CLP 2200
                    <span className="font-font-family-light font-medium leading-5 g:text-[11px]">
                      30-45 min
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="rounded-xl object-cover h-[157px] w-[300px] l:h-[140px] g:h-[117px]"
                    src={oferta4}
                  />
                  <div className="flex absolute items-center gap-x-[130px] l:gap-x-[90px] x:gap-x-[110px] xm:gap-x-[150px] g:gap-x-[45px]">
                    <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                      <IoTrophyOutline className="mx-[2px] " />
                      Ahorros exclusivos
                    </div>
                    <div className="text-end">
                      <RiHeart3Line className="text-Rojo_suave" />
                    </div>
                  </div>
                </div>
                <div className="mx-1 my-2 l:mx-0 xm:mx-2.5 g:mx-0 ">
                  <div className="flex gap-x-[100px] l:gap-x-[65px] x:gap-x-[90px] xm:gap-x-[130px] g:gap-x-[29px]">
                    <div className=" text-[15px] g:text-[px] font-semibold">
                      Little Caesars Pizza
                    </div>
                    <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-semibold">
                      4.6
                    </div>
                  </div>
                  <div className="flex g:flex-col font-font-family-light font-medium leading-5 g:text-[11px]">
                    Costo de envio: CLP 2200
                    <span className="font-font-family-light font-medium leading-5 g:text-[11px]">
                      30-45 min
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="rounded-xl object-cover h-auto w-[300px] l:h-[140px] x:h-[140px] g:h-[118px]"
                    src={oferta6}
                  />
                  <div className="flex absolute items-center gap-x-[130px] l:gap-x-[90px] x:gap-x-[110px] xm:gap-x-[150px] g:gap-x-[50px]">
                    <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                      <IoTrophyOutline className="mx-[2px] " />
                      Ahorros exclusivos
                    </div>
                    <div className="text-end">
                      <RiHeart3Line className="text-Rojo_suave" />
                    </div>
                  </div>
                </div>
                <div className="mx-2 my-2 l:mx-0 xm:ml-2 g:ml-0">
                  <div className="flex text-[15px] font-semibold gap-x-[130px] l:gap-x-[185px] x:gap-x-[205px] xm:gap-x-[240px] g:gap-x-[145px]">
                    KFC
                    <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-semibold">
                      4.4
                    </div>
                  </div>
                  <div className="flex g:flex-col font-font-family-light font-medium leading-5 g:text-[11px]">
                    Costo de envio: CLP 2200
                    <span className="font-font-family-light font-medium leading-5 g:text-[11px]">
                      30-45 min
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="rounded-xl object-cover h-auto w-full l:h-[140px] g:h-[120px]"
                    src={oferta7}
                  />
                  <div className="flex absolute items-center gap-x-[130px] l:gap-x-[90px] x:gap-x-[110px] xm:gap-x-[150px] g:gap-x-[50px]">
                    <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                      <IoTrophyOutline className="mx-[2px] " />
                      Ahorros exclusivos
                    </div>
                    <div className="text-end">
                      <RiHeart3Line className="text-Rojo_claro" />
                    </div>
                  </div>
                </div>
                <div className="mx-2 my-2 l:mx-0 xm:ml-2 g:mx-0">
                  <div className="flex text-[15px] font-semibold gap-x-[130px] l:gap-x-[120px] x:gap-x-[145px] xm:gap-x-[180px] g:gap-x-[85px]">
                    Burger King
                    <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-semibold">
                      4.3
                    </div>
                  </div>
                  <div className="flex g:flex-col font-font-family-light font-medium leading-5 g:text-[11px]">
                    Costo de envio: CLP 2200
                    <span className="font-font-family-light font-medium leading-5 g:text-[11px]">
                      30-45 min
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="rounded-xl object-cover h-auto w-[300px] l:h-[140px] g:h-[120px]"
                    src={oferta8}
                  />
                  <div className="flex absolute items-center gap-x-[130px] l:gap-x-[90px] x:gap-x-[110px] xm:gap-x-[150px] g:gap-x-[50px]">
                    <div className="flex bg-Cian_oscuro mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                      <IoTrophyOutline className="mx-[2px] " />
                      Ahorros exclusivos
                    </div>
                    <div className="text-end">
                      <RiHeart3Line className="text-Rojo_suave" />
                    </div>
                  </div>
                </div>
                <div className="mx-2 my-2 l:mx-0 xm:ml-2 g:mx-0">
                  <div className="flex text-[15px] font-semibold gap-x-[130px] l:gap-x-[135px] x:gap-x-[160px] xm:gap-x-[200px] g:gap-x-[100px]">
                    Tarragona
                    <div className="bg-Gris_muy_claro py-1 px-1 rounded-full text-[13px] font-semibold">
                      4.3
                    </div>
                  </div>
                  <div className="flex g:flex-col font-font-family-light font-medium leading-5 g:text-[11px]">
                    Costo de envio: CLP 2200
                    <span className="font-font-family-light font-medium leading-5 g:text-[11px]">
                      30-45 min
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="border-b border-Plata/50 ">
          <div className="g:ml-2">
            <h3 className="font-font-family font-bold leading-8 normal-nums text-[24px]">
              Tiendas cerca de ti
            </h3>
          </div>
          <div>
            <div className="mt-2 items-center text-center ">
              <Swiper
                className="l:ml-2 l:w-full x:w-full md:w-[800px] g:w-auto"
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
        <div className="mt-[100px]"></div>
      </IonContent>
    </>
  );
};

export default HomePage;
