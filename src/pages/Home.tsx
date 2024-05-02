import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//imagenes jpg/png/etc..
import hamburger from "../img/hamburguesa64px.png";
import supermercado from "../img/tienda-de-comestibles64px.png";
import sushi from "../img/sushi64px.png";
import pizza from "../img/pizza64px.png";
import china from "../img/fideos64px.png";
import oferta from "../img/oferta2.png";
import express from "../img/comida-enlatada64px.png"

// componentes ionic
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonLabel,
} from "@ionic/react";

import { Route, Redirect } from "react-router";

import { IonReactRouter } from "@ionic/react-router";

import ExploreContainer from "../components/ExploreContainer";

// import de iconos
import { RiNotification3Line, RiHeart3Line } from "react-icons/ri";
import { IoMdPricetag } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";

import "../theme/tailwind.css";

const Home: React.FC = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleMove = () => {
    setIsMoved(!isMoved);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="flex flex-row border-none ">
          <div className="flex mt-2">
            <div className="ml-4 mr-3">
              <span className=" font-medium text-xs text-gray-400/85 ">
                Entregar ahora
              </span>
              <div>Direccion</div>
            </div>
            <div className="flex flex-auto items-center justify-end">
              <nav className="flex items-center gap-x-4">
                <button className="relative bg-gray-300 py-2 px-2 rounded-full ">
                  <RiNotification3Line className="text-black" />
                  <span className="absolute -top-1 -right-1 bg-green-800 py-1 px-[6px] rounded-full box-content text-[9px] font-bold text-white">
                    2
                  </span>
                </button>
                <button className="relative"></button>
              </nav>
            </div>
          </div>
          <IonSearchbar
            className="mt-2"
            placeholder="Buscar Uber Eats"
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="flex flex-wrap ">
        <div className="flex mt-5 items-center text-center">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex item">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-yellow-500/80 ">
                  <img src={hamburger} />
                </div>
              </div>
              <div className="font-medium text-[10px] mt-1">Hamburguesa</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-amber-700/55 ">
                  <img src={supermercado} />
                </div>
              </div>
              <div className="font-medium text-[10px] mt-1">Supermercado</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-rose-400/65 ">
                  <img src={sushi} />
                </div>
              </div>
              <div className="font-medium text-[10px] mt-1">Sushi</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-yellow-300/85 ">
                  <img src={pizza} />
                </div>
              </div>
              <div className="font-medium text-[10px] mt-1">Pizza</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-orange-500/90 ">
                  <img src={china} />
                </div>
              </div>
              <div className="font-medium text-[10px] mt-1">Comida China</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-[10px]  py-[13px] px-[13px] rounded-full bg-blue-500/60 ">
                  <img src={express} />
                </div>
              </div>
              <div className="font-medium text-[10px] mt-1">Express</div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex mt-3 text-center ">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="flex left-2 bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-1">
              <IoMdPricetag className=" object-cover" />
              <div className="font-bold text-[13px]">Oferta</div>
            </SwiperSlide>
            <SwiperSlide className="flex left-1 bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-1 ">
              <div className="font-bold text-[13px] px-1">Menos de 30 min</div>
            </SwiperSlide>
            <SwiperSlide className="flex  bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-2">
              <div className="font-bold text-[11px]">Costos</div>
            </SwiperSlide>
            <SwiperSlide className="flex  bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-2">
              <div className="font-bold text-[11px]">Costo de envio</div>
            </SwiperSlide>
            <SwiperSlide className="flex bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-2">
              <div className="font-bold text-[11px]">Paga con Pluxee</div>
            </SwiperSlide>
            <SwiperSlide className="flex bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-2">
              <div className="font-bold text-[11px]">Tipo de Dieta</div>
            </SwiperSlide>
            <SwiperSlide className="flex bg-gray-200/95 rounded-2xl items-center justify-center gap-x-2 py-2">
              <div className="font-bold text-[11px]">Mayor Calificacion</div>
            </SwiperSlide>
            
          </Swiper>
        </div>
        <div className="flex flex-col mt-3 border-b">
          <div className="flex justify-center">
            <img
              className="rounded-xl object-none h-[190px] w-[414px]"
              src={oferta}
            />
            <div className="flex absolute items-center">
              <div className="flex bg-green-600 mt-1 ml-[2px] rounded-lg px-1 text-[12px] items-center text-white">
                <IoTrophyOutline className="mx-[2px] " />
                Oferta superior -
                <span className="ml-1">Gasta CLP 10.000, Ahor...</span>
              </div>
              <div className="ml-[132px] text-end">
                <RiHeart3Line className="text-white" />
              </div>
            </div>
          </div>
          <div className="mx-2 my-2">
            <div className="flex text-[19px] font-semibold gap-x-[296px]">
              Sabor X2
              <div className="bg-gray-200/95 py-1 px-1 rounded-full text-[15px] font-semibold">
                4.4
              </div>
            </div>
            <div>
              <div className="text-[17px] font-extralight text-yellow-700/65" >Costo de envio: CLP 1600 * 30-45 min</div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
