import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import { FaReceipt } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

const Pedidos: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <button
            className=" x:px-[10px] x:py-[10px] l:px-[7px] l:py-[7px] rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="text-Negro x:text-[25px] l:text-[23px]" />
          </button>
          <IonTitle className="font-font-family-light x:text-[28px] l:text-[26px]">
            Pedidos
          </IonTitle>
          <div className="x:pt-1">
            <label className="relative inline-flex cursor-pointer select-none items-center w-full">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center x:space-x-[6px] x:py-2 x:px-[18px] x:text-[16px] x:w-[215px] l:space-x-[6px] l:py-1 l:px-[17px] l:text-[15px] l:w-[200px] font-font-family-light  justify-center ${
                  !isChecked ? "text-Negro border-b-[3px] " : "text-body-color"
                }`}
              >
                <FaReceipt className="x:mr-[6px] l:mr-[5px]  x:text-[17px] l:text-[16px]" />
                Todos los Pedidos
              </span>
              <span
                className={`flex items-center x:space-x-[6px] x:py-2 x:px-[18px] x:text-[16px] x:w-[215px] l:space-x-[6px] l:py-1 l:px-[17px] l:text-[15px] l:w-[200px] font-font-family-light  justify-center ${
                  isChecked ? "text-Negro border-b-[3px]" : "text-body-color"
                }`}
              >
                <FiRepeat className="x:mr-[6px] l:mr-[5px] x:text-[17px] l:text-[16px]" />
                Volver a pedir
              </span>
            </label>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isChecked ? (
          <div
            id="2"
            className="flex flex-col justify-center items-center x:w-auto x:h-[640px] l:w-auto l:h-[600px]"
          >
            <TfiReceipt className="x:text-[50px] x:mb-2 l:text-[45px] l:mb-2 text-Gris_paloma " />
            <div className="font-font-family-light x:mb-4 x:text-[18px] l:mb-3 l:text-[16px]">
              Aun no hay pedidos
            </div>
            <div className="flex flex-col justify-center items-center font-font-family-light font-light x:text-[15px] x:mb-4 l:text-[14px] l:mb-3">
              Aqui podras ver el historial de pedidos y volver a
              <span>pedir tus favoritos</span>
            </div>
            <button className="bg-Negro text-Blanco x:px-3 x:py-3 rounded-3xl font-font-family-light x:text-[15px] l:py-2 l:px-2 l:text-[13px]">
              Iniciar un pedido
            </button>
          </div>
        ) : (
          <div
            id="1"
            className="flex flex-col justify-center items-center x:w-auto x:h-[640px] l:w-auto l:h-[600px]"
          >
            <TfiReceipt className="x:text-[50px] x:mb-2 l:text-[45px] l:mb-2 text-Gris_paloma " />
            <div className="font-font-family-light x:mb-4 x:text-[18px] l:mb-3 l:text-[16px]">
              Aun no hay pedidos
            </div>
            <div className="flex flex-col justify-center items-center font-font-family-light font-light x:text-[15px] x:mb-4 l:text-[14px] l:mb-3">
              Aqui podras ver el historial de pedidos y volver a
              <span>pedir tus favoritos</span>
            </div>
            <button className="bg-Negro text-Blanco x:px-3 x:py-3 rounded-3xl font-font-family-light x:text-[15px] l:px-2 l:py-2 l:text-[13px]">
              Iniciar un pedido
            </button>
          </div>
        )}
      </IonContent>
    </>
  );
};

export default Pedidos;
