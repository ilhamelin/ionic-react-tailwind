import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";

import { FaStar, FaCircle, FaAngleRight, FaUserPlus } from "react-icons/fa6";

import { AiOutlineLike, AiOutlinePlus } from "react-icons/ai";

import Portada from "../../../img/Portada_Señor_de_los_Bajones.png";
import Promo from "../../../img/DonutUberOne@3x.png";

import Favorito_1 from "../../../img/El_Señor_De_Los_Bajones/Duo_Sandwich.png";
import Favorito_2 from "../../../img/El_Señor_De_Los_Bajones/Papas_Fritas.png";
import Favorito_3 from "../../../img/El_Señor_De_Los_Bajones/Vienesa_italiana.png";
import Favorito_4 from "../../../img/El_Señor_De_Los_Bajones/Papas_boromir.png";
import Favorito_5 from "../../../img/El_Señor_De_Los_Bajones/Vienesa_italiana_grande.webp";

import { BsBagFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoTrophyOutline } from "react-icons/io5";
import { RiHeart3Line } from "react-icons/ri";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const Vista_Productos: React.FC = () => {
  // Aquí puedes utilizar ofertaId para cargar la información de la oferta seleccionada
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <IonContent fullscreen={true}>
        <div className="flex flex-col">
          <div>
            <img src={Portada} className="object-cover h-[140px] w-full" />
          </div>
          <div className="font-font-family-light font-medium x:text-[21px] text-center x:mt-2">
            El Señor De Los Bajones
          </div>
          <div className="flex items-center justify-center space-x-5 ">
            <div className="flex-col ">
              <div className="flex font-font-family-light font-normal items-center justify-center x:text-[13px]">
                4.6
                <FaStar className="text-[11px] mx-[4px]" />
                <span className="flex items-center font-font-family-light font-light">
                  (89)
                  <FaCircle className="mx-[4px] text-[2.7px]" />
                  Costo de envio: CLP 1800
                  <FaCircle className="mx-[4px] text-[2.7px]" />
                </span>
              </div>
              <div className="flex font-font-family-light font-light x:text-[13px] items-center justify-center">
                <FaCircle className="mx-[4px] text-[2.7px]" />
                4.7 km
              </div>
            </div>
            <div className="mr-0">
              <FaAngleRight className="x:text-[10px]" />
            </div>
          </div>
          <div className="flex mt-5 gap-x-10 items-center justify-center">
            <div className="">
              <label className=" relative inline-flex cursor-pointer select-none items-center justify-center rounded-2xl bg-white px-1 bg-Gris_muy_claro">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={`flex items-center space-x-[6px] rounded-2xl py-1 px-[18px]  my-1 text-sm font-font-family-light ${
                    !isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
                  }`}
                >
                  Entrega
                </span>
                <span
                  className={`flex items-center space-x-[6px] rounded-2xl py-1 px-[18px]  my-1 text-sm font-font-family-light ${
                    isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
                  }`}
                >
                  Recoleccion
                </span>
              </label>
            </div>
            <div className="flex items-center bg-Gris_muy_claro x:px-[9px] x:py-[9px] rounded-2xl space-x-2">
              <div className=" ">
                <FaUserPlus />
              </div>
              <div className="font-font-family-light font-normal x:text-[14px]">
                pedido grupal
              </div>
            </div>
          </div>
          <div className="flex justify-center x:space-x-10 border border-Gris_muy_claro rounded-md x:mt-4 x:mx-5 x:py-4 font-font-family-light ">
            <div className="flex flex-col text-center x:pr-10 border-r border-Gris_muy_claro">
              <div className="font-medium x:text-[12px]">
                Costos de envio: CLP 1800
              </div>
              <div className="font-light x:text-[11px]">Precios y Tarifa</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="font-medium x:text-[12px]">30-45 min</div>
              <div className="font-light x:text-[11px]">Tiempo de entrega</div>
            </div>
          </div>
          <div className="flex justify-center border-none rounded-md x:mx-5 x:space-x-[86px] bg-PapayaWhip  x:mt-5 font-font-family-light">
            <div className="flex flex-col x:pt-2 x:pl-2 ">
              <span className="font-semibold x:text-[12px]">
                Sin Costo de envio y Hasta un 5%
              </span>
              <span className="font-semibold x:text-[12px]">
                de Ahorro con uber One
              </span>
              <div className="x:mt-4 font-normal x:text-[13px] text-center">
                <div className="bg-Blanco rounded-lg x:w-[120px] x:h-auto">
                  1 mes sin costo
                </div>
              </div>
            </div>
            <div>
              <img
                src={Promo}
                className="object-cover x:h-[100px] x:w-[100px] rounded-r-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-5  border-b border-b-Gris_muy_claro">
            <div className="font-font-family-light font-bold x:text-[25px] ml-5">
              Articulos destacados
            </div>
            <div>
              <div className="mb-4">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={2.5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="flex justify-center px-4">
                      <img
                        className="rounded-xl object-cover h-auto w-auto x:h-[140px] drop-shadow-md"
                        src={Favorito_1}
                      />
                      <div className="absolute">
                        <div className="bg-Cian_oscuro text-Blanco mt-1 ml-[2px] rounded-md px-1.5 text-[12px] items-center text-white x:mr-4">
                          #1 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[120px] x:right-[20px] bg-Gris_muy_claro shadow-lg x:py-2 x:px-2 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 px-4">
                      <div className="flex">
                        <div className="flex flex-col text-[15px] font-font-family-light font-semibold">
                          Duo Sandwich
                          <span className="">Churrasco</span>
                          <span className="">Italiano</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light leading-5 g:text-[11px]">
                        <div className="flex items-center">
                          CLP 10,700
                          <FaCircle className="mx-[4px] text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light text-[11px]">
                          <AiOutlineLike className="mr-[2.5px]" />
                          90% (41)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center px-4 ">
                      <img
                        className="rounded-xl object-cover h-auto w-auto x:h-[140px] drop-shadow-md "
                        src={Favorito_2}
                      />
                      <div className="absolute">
                        <div className="bg-Cian_oscuro text-Blanco mt-1 ml-[2px] rounded-lg px-1.5 text-[12px] items-center text-white x:mr-4">
                          #2 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[75px] x:right-[20px] bg-Gris_muy_claro shadow-lg x:py-2 x:px-2 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 px-4">
                      <div className="flex">
                        <div className="text-[15px] font-font-family-light font-semibold">
                          Papas clasicas
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light leading-5 g:text-[11px]">
                        <div className="flex items-center">
                          CLP 6,200
                          <FaCircle className="mx-[4px] text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light text-[11px]">
                          <AiOutlineLike className="mr-[2.5px]" />
                          88% (325)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center px-4">
                      <img
                        className="rounded-xl object-cover h-auto w-auto x:h-[140px] drop-shadow-md "
                        src={Favorito_3}
                      />
                      <div className="flex absolute ">
                        <div className="bg-Cian_oscuro text-Blanco mt-1 ml-[2px] rounded-md px-1.5 text-[12px] items-center text-white x:mr-4">
                          #3 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[75px] x:right-[20px] bg-Gris_muy_claro shadow-lg x:py-2 x:px-2 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 px-4">
                      <div className="flex">
                        <div className="flex flex-col text-[15px] font-font-family-light font-semibold">
                          Vienesa italiana
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light leading-5 g:text-[11px]">
                        <div className="flex items-center">
                          CLP 5,500
                          <FaCircle className="mx-[4px] text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light text-[11px]">
                          <AiOutlineLike className="mr-[2.5px]" />
                          94% (147)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center px-4">
                      <img
                        className="rounded-xl object-cover h-auto w-auto x:h-[140px] drop-shadow-md"
                        src={Favorito_4}
                      />
                      <div className="flex absolute ">
                        <div className="bg-Cian_oscuro text-Blanco mt-1 ml-[2px] rounded-md px-1.5 text-[12px] items-center text-white x:mr-4">
                          #4 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[75px] x:right-[20px] bg-Gris_muy_claro shadow-lg x:py-2 x:px-2 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 px-4">
                      <div className="flex">
                        <div className="flex flex-col text-[15px] font-font-family-light font-semibold">
                          Papas Boromir
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light leading-5  g:text-[11px]">
                        <div className="flex items-center">
                          CLP 4,800
                          <FaCircle className="mx-[4px] text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light text-[11px]">
                          <AiOutlineLike className="mr-[2.5px]" />
                          93% (590)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center px-4">
                      <img
                        className="rounded-xl object-cover h-auto w-auto x:h-[140px] drop-shadow-md"
                        src={Favorito_5}
                      />
                      <div className="flex absolute ">
                        <div className="bg-Cian_oscuro text-Blanco mt-1 ml-[2px] rounded-md px-1.5 text-[12px] items-center text-white x:mr-4">
                          #5 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[100px] x:right-[20px] bg-Gris_muy_claro shadow-lg x:py-2 x:px-2 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 px-4">
                      <div className="flex">
                        <div className="flex flex-col text-[15px] font-font-family-light font-semibold">
                          Vienesa Italiana
                          <span>Gigante</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light leading-5  g:text-[11px]">
                        <div className="flex items-center">
                          CLP 4,800
                          <FaCircle className="mx-[4px] text-[2.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light text-[11px]">
                          <AiOutlineLike className="mr-[2.5px]" />
                          81% (254)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mt-5">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-4 ">
              Seleccionado para ti
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-[120px] border-b border-b-Gris_muy_claro pb-3">
                <div className="flex flex-col x:px-4 ">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px]">
                    Duo Sandwich Churrasco
                    <span>Italiano</span>
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px]">
                    CLP 10,700
                    <FaCircle className="mx-[4px] text-[2.7px]" />
                    <AiOutlineLike className="mr-[2.5px]" /> 88% (147)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px]">
                    Dos churrascos, palta, tomate y<span>mayonesa casera.</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={Favorito_1}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md"
                  />
                  <button className="absolute x:-bottom-[130px] x:right-[12px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex gap-x-[120px] mb-3">
                <div className="flex flex-col x:px-4">
                  <div className=" font-font-family-light font-medium x:text-[13px]">
                    Vienesa italiana
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px]">
                    CLP 5,500
                    <FaCircle className="mx-[4px] text-[2.7px]" />
                    <AiOutlineLike className="mr-[2.5px]" /> 90% (41)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px]">
                    vienesa, tomate picante, palta y<span>mayonesa casera.</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={Favorito_3}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md"
                  />
                  <button className="absolute x:-bottom-[245px] x:right-[12px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default Vista_Productos;
