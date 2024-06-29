import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../theme/tailwind.css";

// Import Componentes
import Interruptor from "../components/Interruntor";
import { useFavorites } from "../Context/FavoritesContext";

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

import { auth, db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import StoreView from "./Vista_Locales/LocalPage";
import LocalPageSub from "./Vista_Locales/LocalPageSub";

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/promociones");
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

  const hideToast = () => {
    setShowToast(false);
  };

  //DateBase FireBase

  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        console.log("Authenticated user ID:", user.uid); // Verifica el UID del usuario
        const userDocRef = doc(db, "Usuarios", user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("No user data found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const tiendasIdsSuperior = new Set(["1", "4"]);
  const tiendasIdsOfertas = new Set(["6"]);
  const tiendasIdsOfertasHoy = new Set([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);

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
                Direccion: {userData ? userData.address : "Cargando..."}
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
            {[...tiendasIdsSuperior].map((idTienda) => (
              <StoreView key={idTienda} idTienda={idTienda} />
            ))}
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
            spaceBetween={10}
            pagination={{ clickable: true }}
          >
            {[...tiendasIdsOfertasHoy].map((idTienda) => (
              <SwiperSlide key={idTienda}>
                <LocalPageSub idTienda={idTienda} />
              </SwiperSlide>
            ))}
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
            {[...tiendasIdsOfertas].map((idTienda) => (
              <StoreView key={idTienda} idTienda={idTienda} />
            ))}
          </div>
        </div>
        <div></div>

        <div className="mt-[100px]"></div>
      </IonContent>
    </>
  );
};

export default HomePage;
