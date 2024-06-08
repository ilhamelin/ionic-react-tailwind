import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

import { IoIosArrowForward } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { RiTicketLine } from "react-icons/ri";

import paypal from "../../img/paypalx32.png";
import efectivo from "../../img/billete-de-un-dolar32px.png";

const PagoPage: React.FC = () => {
  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <button
            className=" px-[10px] py-[10px] rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="text-Negro text-[25px]" />
          </button>
          <IonTitle className="font-font-family-light text-[28px]">
            Billetera
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="max-w-screen-x">
          <div className="bg-gradient-to-l from-Mercurio mx-4 shadow-2xl rounded-lg px-5 py-5">
            <div className="font-font-family-light text-[15px] font-normal">
              Uber Cash
            </div>
            <div className="flex font-font-family-light items-center x:gap-[235px] l:gap-[190px] g:gap-[140px]">
              <div className="text-[28px] font-bold">
                CLP
                <span className="ml-4">0</span>
              </div>
              <IoIosArrowForward className=" text-[20px] " />
            </div>
          </div>
          <div className="my-6 mx-4">
            <div className="font-font-family-light font-semibold text-[18px]">
              Medodo de pago
            </div>
            <div className="flex flex-col pt-4 gap-y-5 mb-5">
              <div className="flex">
                <img src={paypal} className="mr-4" />
                <div className="flex flex-col font-font-family-light text-[14px]">
                  PayPal
                  <span className="font-light text-[10px] leading-3">
                    benjaminreyes55@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex">
                <img src={efectivo} className="mr-4" />
                <div className="flex flex-col font-font-family-light text-[14px] justify-center">
                  Efectivo
                </div>
              </div>
            </div>
            <button className="bg-Gris_muy_claro px-3 py-2 rounded-xl font-font-family-light text-[14px] ">
              Agregar un metodo de pago
            </button>
          </div>
          <div className="my-6 mx-4 mb-10">
            <div className="font-font-family-light font-semibold text-[18px] mb-5">
              Cupon de comida
            </div>
            <button className="flex items-center gap-5">
              <GrFormAdd className="text-[25px]" />
              <div className="font-font-family-light text-[16px]">
                Conectar cuenta
              </div>
            </button>
          </div>
          <div className="my-6 mx-4">
            <div className="font-font-family-light font-semibold text-[18px] mb-5">
              Cupones
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-5">
                <RiTicketLine className="text-[20px]" />
                <div className="font-font-family-light text-[16px]">
                  Cupones
                </div>
              </div>
              <div className="flex items-center gap-5">
                <GrFormAdd className="text-[25px]" />
                <div className="font-font-family-light text-[16px]">
                  Conectar cuenta
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default PagoPage;
