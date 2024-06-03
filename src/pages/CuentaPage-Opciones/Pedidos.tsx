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
            className=" px-[10px] py-[10px] rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="text-Negro text-[25px]" />
          </button>
          <IonTitle className="font-font-family-light text-[28px]">
            Pedidos
          </IonTitle>
          <div className="pt-1">
            <label className="relative inline-flex cursor-pointer select-none items-center w-full">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center space-x-[6px] py-2 px-[18px] text-[16px] font-font-family-light x:w-[215px] justify-center ${
                  !isChecked ? "text-Negro border-b-[3px] " : "text-body-color"
                }`}
              >
                <FaReceipt className="mr-[6px] text-[17px]" />
                Todos los Pedidos
              </span>
              <span
                className={`flex items-center space-x-[6px] py-2 px-[18px] text-[16px] font-font-family-light x:w-[215px] justify-center ${
                  isChecked ? "text-Negro border-b-[3px]" : "text-body-color"
                }`}
              >
                <FiRepeat className="x:mr-[6px] x:text-[17px]" />
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
            className="flex flex-col justify-center items-center x:w-auto x:h-[640px]"
          >
            <TfiReceipt className="text-[50px] text-Gris_paloma mb-2" />
            <div className="font-font-family-light x:mb-4 x:text-[18px]">
              Aun no hay pedidos
            </div>
            <div className="flex flex-col justify-center items-center font-font-family-light font-light text-[15px] x:mb-4">
              Aqui podras ver el historial de pedidos y volver a
              <span>pedir tus favoritos</span>
            </div>
            <button className="bg-Negro text-Blanco px-3 py-3 rounded-3xl font-font-family-light text-[15px] ">
              Iniciar un pedido
            </button>
          </div>
        ) : (
          <div
            id="1"
            className="flex flex-col justify-center items-center x:w-auto x:h-[640px]"
          >
            <TfiReceipt className="text-[40px] text-Gris_paloma mb-2" />
            <div className="font-font-family-light x:mb-4">
              Aun no hay pedidos
            </div>
            <div className="flex flex-col justify-center items-center font-font-family-light font-light text-[13px] x:mb-4">
              Aqui podras ver el historial de pedidos y volver a
              <span>pedir tus favoritos</span>
            </div>
            <button className="bg-Negro text-Blanco px-3 py-3 rounded-3xl font-font-family-light text-[15px] ">
              Iniciar un pedido
            </button>
          </div>
        )}
      </IonContent>
    </>
  );
};

export default Pedidos;
