import React, { useEffect, useState } from "react";
import { IonContent, IonHeader } from "@ionic/react";

import { FaSearch } from "react-icons/fa";

import {
  FaStar,
  FaCircle,
  FaAngleRight,
  FaUserPlus,
  FaRegHeart,
  FaEllipsisVertical,
  FaArrowLeft,
} from "react-icons/fa6";

import { AiOutlineLike, AiOutlinePlus, AiFillTag } from "react-icons/ai";

import Portada_M from "../../../img/Mc_Macdonals/Portada.png";
import Promo from "../../../img/DonutUberOne@3x.png";

import Favorito_1 from "../../../img/Mc_Macdonals/Doble_Cuarto_Libra.png";
import Favorito_2 from "../../../img/Mc_Macdonals/Nuggets.png";
import Favorito_3 from "../../../img/Mc_Macdonals/Cuarto_Libra.png";
import Favorito_4 from "../../../img/Mc_Macdonals/Gran_Big_Mac.png";
import Favorito_5 from "../../../img/Mc_Macdonals/Bacon_Cheddar_McMelt_2_Carnes.png";
import Favorito_6 from "../../../img/Mc_Macdonals/Family_box_uber.png";
import Favorito_7 from "../../../img/El_Señor_De_Los_Bajones/Vienesa_completo.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const Vista_Productos_M: React.FC = () => {
  // Aquí puedes utilizar ofertaId para cargar la información de la oferta seleccionada
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Agrega el estado scrolled y la función handleScroll

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 transition-transform duration-300">
        <IonHeader
          class="shadow-none"
          className="bg-transparent flex justify-between items-center sticky top-0 transition duration-300"
        >
          <div className="x:mt-[5px] x:ml-2">
            <button
              className="bg-Negro px-[10px] py-[10px] rounded-full bg-opacity-50"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="text-Blanco" />
            </button>
          </div>
          <div className="flex x:gap-x-5 x:px-4 items-center justify-center x:mt-[5px]">
            <button className="bg-Negro x:px-[10px] x:py-[10px] rounded-full bg-opacity-50">
              <FaRegHeart className=" text-Blanco text-[15px]" />
            </button>
            <button className="bg-Negro x:px-[10px] x:py-[10px] rounded-full bg-opacity-50">
              <FaSearch className=" text-Blanco text-[15px]" />
            </button>
            <button className="bg-Negro x:px-[10px] x:py-[10px] rounded-full bg-opacity-50">
              <FaEllipsisVertical className=" text-Blanco text-[15px]" />
            </button>
          </div>
        </IonHeader>
      </div>
      <IonContent fullscreen={true}>
        <div className="flex flex-col">
          <div>
            <img
              src={Portada_M}
              className="object-cover x:h-[140px] l:h-[130px] w-full"
            />
          </div>
          <div className="font-font-family-light font-medium x:text-[21px] x:mt-2 l:text-[18px] l:mt-1 text-center">
            McDonald's
          </div>
          <div className="flex items-center justify-center x:space-x-5 l:space-x-3">
            <div className="flex-col ">
              <div className="flex font-font-family-light font-normal items-center justify-center x:text-[13px] l:text-[12px]">
                4.4
                <FaStar className="x:text-[11px] x:mx-[4px] l:text-[8px] l:mx-[2px]" />
                <span className="flex items-center font-font-family-light font-light">
                  (25,000+)
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[2px] l:text-[2.7px]" />
                  <span className="text-Joya_del_Chelsea font-medium">
                    Uber One
                  </span>
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[2px] l:text-[2.7px]" />
                </span>
              </div>
              <div className="flex font-font-family-light font-light x:text-[13px] l:text-[12px] items-center justify-center">
                <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[2px] l:text-[2.7px]" />
                4.7 km
              </div>
            </div>
            <div>
              <FaAngleRight className="x:text-[10px] l:text-[7px]" />
            </div>
          </div>
          <div className="flex x:mt-5 x:gap-x-10 l:mt-4 l:gap-x-5 items-center justify-center">
            <div>
              <label className=" relative inline-flex cursor-pointer select-none items-center justify-center rounded-2xl bg-white px-1  bg-Gris_muy_claro">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={`flex items-center x:space-x-[6px] l:space-x-[3px] rounded-2xl py-1 x:px-[18px] l:px-[14px]  my-1 text-sm font-font-family-light ${
                    !isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
                  }`}
                >
                  Entrega
                </span>
                <span
                  className={`lex items-center x:space-x-[6px] l:space-x-[3px] rounded-2xl py-1 x:px-[18px] l:px-[14px]  my-1 text-sm font-font-family-light ${
                    isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
                  }`}
                >
                  Recoleccion
                </span>
              </label>
            </div>
            <div className="flex items-center bg-Gris_muy_claro x:px-[9px] x:py-[9px] rounded-2xl space-x-2 l:px-[7px] l:py-[7px]">
              <div>
                <FaUserPlus />
              </div>
              <div className="font-font-family-light font-normal x:text-[14px] l:text-[12px]">
                pedido grupal
              </div>
            </div>
          </div>
          <div className="flex justify-center x:space-x-10 l:space-x-5 border border-Gris_muy_claro rounded-md x:mt-4 x:mx-5 x:py-4 l:mt-2 l:py-2 l:mx-2 font-font-family-light ">
            <div className="flex flex-col text-center x:pr-10 l:pr-5 border-r border-Gris_muy_claro">
              <div className="font-medium x:text-[12px] l:text-[11px]">
                Costos de envio: CLP 1800
              </div>
              <div className="font-light x:text-[11px] l:text-[10px]">
                Precios y Tarifa
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="font-medium x:text-[12px] l:text-[11px]">
                30-45 min
              </div>
              <div className="font-light x:text-[11px] l:text-[10px]">
                Tiempo de entrega
              </div>
            </div>
          </div>
          <div className="border-b-[5px] border-Gris_muy_claro">
            <div className="flex x:mx-5 x:mb-2 x:mt-3 x:gap-5 scroll-auto	l:mx-5 l:mb-2 l:mt-3 l:gap-5 ">
              <div className="font-font-family-light x:scroll-ml-6 snap-start">
                <div className="font-medium x:text-[15px] l:text-[14px]">
                  Menu Regular
                </div>
                <div className="font-light x:text-[14px] l:text-[13px]">
                  8:00 AM - 11:00 PM
                </div>
              </div>
              <div className="font-font-family-light scroll-ml-6 snap-start">
                <div className="font-medium x:text-[15px] l:text-[14px]">
                  Menu 2
                </div>
                <div className="font-light x:text-[14px] l:text-[13px]">
                  7:00 AM - 11:00 AM
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center border-none rounded-md x:mx-5 l:mx-4 x:space-x-[86px] l:space-x-[80px] bg-PapayaWhip  x:mt-5 l:mt-4 font-font-family-light">
            <div className="flex flex-col x:pt-2 x:pl-2 l:pt-2 l:pl-2 ">
              <span className="font-semibold x:text-[12px] l:text-[11px]">
                Sin Costo de envio y Hasta un 5%
              </span>
              <span className="font-semibold x:text-[12px] l:text-[11px]">
                de Ahorro con uber One
              </span>
              <div className="x:mt-4 l:mt-2 font-normal x:text-[13px] l:text-[12px] text-center">
                <div className="bg-Blanco rounded-lg x:w-[120px] x:h-auto l:w-[110px] l:h-auto">
                  1 mes sin costo
                </div>
              </div>
            </div>
            <div>
              <img
                src={Promo}
                className="object-cover x:h-[100px] x:w-[100px] l:h-[90px] l:w-[90px] rounded-r-md"
              />
            </div>
          </div>
          <div className="flex flex-col x:mt-5 l:mt-4  border-b border-b-Gris_muy_claro">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-5 l:text-[23px] l:ml-4">
              Articulos destacados
            </div>
            <div>
              <div className="x:mb-4 l:mb-3">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={2.5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 relative">
                      <img
                        className="rounded-xl object-cover x:h-[140px] l:h-[100px] drop-shadow-md"
                        src={Favorito_1}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px]">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:text-[12px] l:px-1.5 l:text-[11px] items-center text-white x:mr-4 l:mr-2 font-font-family-light">
                          #1 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[4px] x:right-[20px] l:bottom-[4px] l:right-[15px] bg-Blanco shadow-lg x:py-2 x:px-2 l:py-1 l:px-1 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] font-font-family-light font-semibold">
                          Duo Sandwich
                          <span>Churrasco</span>
                          <span>Italiano</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px]">
                        <div className="flex items-center">
                          CLP 10,700
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px]" />
                          90% (41)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 relative">
                      <img
                        className="rounded-xl object-cover x:h-[140px] l:h-[100px] drop-shadow-md"
                        src={Favorito_2}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px]">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:text-[12px] l:px-1.5 l:text-[11px] items-center text-white x:mr-4 l:mr-2 font-font-family-light">
                          #2 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[4px] x:right-[20px] l:bottom-[4px] l:right-[15px] bg-Blanco shadow-lg x:py-2 x:px-2 l:py-1 l:px-1 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] font-font-family-light font-semibold">
                          Papas Clasicas
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px]">
                        <div className="flex items-center">
                          CLP 6,200
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px]" />
                          88% (325)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 relative">
                      <img
                        className="rounded-xl object-cover x:h-[140px] l:h-[100px] drop-shadow-md"
                        src={Favorito_3}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px]">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:text-[12px] l:px-1.5 l:text-[11px] items-center text-white x:mr-4 l:mr-2 font-font-family-light">
                          #3 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[4px] x:right-[20px] l:bottom-[4px] l:right-[15px] bg-Blanco shadow-lg x:py-2 x:px-2 l:py-1 l:px-1 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] font-font-family-light font-semibold">
                          Vienesa
                          <span>Italiano</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px]">
                        <div className="flex items-center">
                          CLP 5,500
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px]" />
                          94% (147)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 relative">
                      <img
                        className="rounded-xl object-cover x:h-[140px] l:h-[100px] drop-shadow-md"
                        src={Favorito_4}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px]">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:text-[12px] l:px-1.5 l:text-[11px] items-center text-white x:mr-4 l:mr-2 font-font-family-light">
                          #4 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[4px] x:right-[20px] l:bottom-[4px] l:right-[15px] bg-Blanco shadow-lg x:py-2 x:px-2 l:py-1 l:px-1 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] font-font-family-light font-semibold">
                          Papas
                          <span>Doromir</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px]">
                        <div className="flex items-center">
                          CLP 4,800
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px]" />
                          93% (590)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center x:px-4 l:px-3 relative">
                      <img
                        className="rounded-xl object-cover x:h-[140px] l:h-[100px] drop-shadow-md"
                        src={Favorito_5}
                      />
                      <div className="absolute x:bottom-[115px] x:right-[19px] l:bottom-[74px] l:right-[20px]">
                        <div className="bg-Cian_oscuro text-Blanco rounded-md x:px-1.5 x:text-[12px] l:px-1.5 l:text-[11px] items-center text-white x:mr-4 l:mr-2 font-font-family-light">
                          #5 de tus favoritos
                        </div>
                      </div>
                      <button className="absolute x:bottom-[4px] x:right-[20px] l:bottom-[4px] l:right-[15px] bg-Blanco shadow-lg x:py-2 x:px-2 l:py-1 l:px-1 rounded-full">
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="mt-1 x:px-4 l:px-3">
                      <div className="flex">
                        <div className="flex flex-col x:text-[15px] l:text-[13px] font-font-family-light font-semibold">
                          Vienesa Itialina
                          <span>Gigante</span>
                        </div>
                      </div>
                      <div className="flex flex-col font-font-family-light font-light x:leading-5 l:leading-4 x:text-[11px] l:text-[10px]">
                        <div className="flex items-center">
                          CLP 4,800
                          <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx-[3px] l:text-[3.7px]" />
                        </div>
                        <span className="flex items-center font-font-family-light font-light x:text-[11px] l:text-[9px]">
                          <AiOutlineLike className="x:mr-[2.5px] l:mr-[2.5px]" />
                          90% (41)
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mt-5 l:mt-4">
            <div className="font-font-family-light font-bold x:text-[25px] x:ml-4 l:text-[24px] l:ml-3">
              Seleccionado para ti
            </div>
            <div className="flex flex-col x:gap-y-3 pt-2 l:gap-2 ">
              <div className="flex x:gap-x-[120px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[90px]">
                <div className="flex flex-col x:px-4 l:px-3 ">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                    Duo Sandwich Churrasco
                    <span>Italiano</span>
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                    CLP 10,700
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" /> 88%
                    (147)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                    Dos churrascos, palta, tomate y<span>mayonesa casera.</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_1}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[120px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[90px]">
                <div className="flex flex-col x:px-4 l:px-3 ">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                    Vienesa italiana
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                    CLP 5,500
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" /> 90%
                    (41)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                    vienesa, tomate picante, palta y
                    <span>mayonesa casera.</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_3}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[90px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[65px]">
                <div className="flex flex-col x:px-4 l:px-3 ">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                    Papas Boromir
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                    CLP 10,700
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" /> 93%
                    (560)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                    Papas fritas con salssa de queso
                    <span>Cheddar, tomate y cebollin salteado...</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_4}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[130px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[100px]">
                <div className="flex flex-col x:px-4 l:px-3 ">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                    Papas clasicas
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                    CLP 6,200
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" /> 88%
                    (325)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                    Porcion papas fritas mediana
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_2}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="flex x:gap-x-[130px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[80px]">
                <div className="flex flex-col x:px-4 l:px-3 ">
                  <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                    Papas Aragon
                  </div>
                  <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                    CLP 10,700
                    <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                    <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" />
                    100% (6)
                  </div>
                  <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                    Papas fritas, churrasco,
                    <span>champiñon salteado y crema esp...</span>
                  </div>
                </div>
                <div className="flex justify-center relative">
                  <img
                    src={Favorito_6}
                    className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                  />
                  <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                    <AiOutlinePlus className="x:text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mt-5 l:mt-5">
            <div className="flex items-center font-font-family-light font-bold x:text-[25px] x:ml-4 l:text-[25px] l:ml-4">
              <AiFillTag className="text-Verde x:mr-[2px] x:text-[30px] l:mr-[2px] l:text-[28px]" />
              2x1
            </div>
            <div className="flex x:gap-x-[130px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[90px]">
              <div className="flex flex-col x:px-4 l:px-3 ">
                <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                  Vienesa italiana
                </div>
                <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                  CLP 5,500
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                  <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" /> 90% (41)
                </div>
                <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                  vienesa, tomate picante, palta y<span>mayonesa casera.</span>
                </div>
                <div className="font-font-family-light font-semibold x:text-[11px] l:text-[11px] text-Verde">
                  Compra 1, llevate 1 extra
                </div>
              </div>
              <div className="flex justify-center relative">
                <img
                  src={Favorito_3}
                  className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                />
                <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                  <AiOutlinePlus className="x:text-[10px]" />
                </button>
              </div>
            </div>
            <div className="flex x:gap-x-[130px] border-b border-b-Gris_muy_claro x:pb-3 l:pb-2 l:gap-x-[105px]">
              <div className="flex flex-col x:px-4 l:px-3 ">
                <div className="flex flex-col font-font-family-light font-medium x:text-[13px] l:text-[12px]">
                  Vienesa completo
                </div>
                <div className="flex items-center font-font-family-light font-normal x:text-[12px] l:text-[11px]">
                  CLP 5,500
                  <FaCircle className="x:mx-[4px] x:text-[2.7px] l:mx.[4px] l:text-[2.7px]" />
                  <AiOutlineLike className="x:mr-[2.5px] l:mr-[2px]" /> 100% (9)
                </div>
                <div className="flex flex-col font-font-family-light font-light x:text-[11px] l:text-[10px]">
                  vienesa, chucrut, americana,
                  <span>tomate y matonesa casera</span>
                </div>
                <div className="font-font-family-light font-semibold x:text-[11px] l:text-[11px] text-Verde">
                  Compra 1, llevate 1 extra
                </div>
              </div>
              <div className="flex justify-center relative">
                <img
                  src={Favorito_7}
                  className="rounded-xl object-cover h-auto w-auto x:h-[90px] x:w-[110px] drop-shadow-md l:h-[90px] l:w-[110px]"
                />
                <button className="absolute x:bottom-[4px] x:right-[4px] bg-Blanco shadow-lg x:py-2 x:px-2 rounded-full l:bottom-[4px] l:right-[4px] l:py-1 l:px-1">
                  <AiOutlinePlus className="x:text-[10px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default Vista_Productos_M;
