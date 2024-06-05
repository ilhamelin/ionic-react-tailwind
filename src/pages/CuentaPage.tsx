import React from "react";

import { Link, useHistory } from "react-router-dom";

import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

import { FaCircleUser } from "react-icons/fa6";

import Favoritos from "../img/anadir64px.png";
import Billetera from "../img/billetera64px.png";
import Pedidos from "../img/entrega-de-pedidos64px.png";
import UberOne from "../img/UberOne.png";

import { HiUserGroup } from "react-icons/hi";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { MdOutlineHelpOutline } from "react-icons/md";
import { PiSuitcaseBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdVibration } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";

const CuentaPage: React.FC = () => {
  const history = useHistory();

  const handleBilletera = () => {
    history.push("/billetera");
  };

  const handleFavoritos = () => {
    history.push("/favoritos");
  };

  const handlePedidos = () => {
    history.push("/pedidos");
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <IonTitle>
            <div className="flex x:gap-[80px] l:gap-[70px] g:gap-[60px] justify-start items-center">
              <div className="flex flex-col x:text-[30px] l:text-[25px] g:text-[20px] font-font-family-light">
                Benjamin ignacio
                <span>Reyes Valdes</span>
              </div>
              <FaCircleUser className="x:text-[56px] l:text-[55px] g:text-[50px] items-end" />
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="font-font-family-light">
          <div className="flex  justify-center x:mx-4 x:mt-4 x:gap-[20px] l:mx-3 l:mt-4 l:gap-[20px] g:mx-4 g:mt-4 g:gap-[10px]">
            <button
              className="flex flex-col bg-Gris_muy_claro rounded-xl x:px-6 x:py-4 l:px-5 l:py-3 items-center shadow-lg border-b-[3px] border-Plata g:px-4 g:py-2"
              onClick={handleFavoritos}
            >
              <img className="g:h-[50px]" src={Favoritos} />
              <span className="font-font-family-light font-medium my-1 l:my-1 g:my-1">
                Favoritos
              </span>
            </button>
            <button
              className="flex flex-col bg-Gris_muy_claro rounded-xl x:px-6 x:py-4 l:px-5 l:py-3 g:px-4 g:py-2 items-center shadow-xl border-b-[3px] border-Plata "
              onClick={handleBilletera}
            >
              <img className="g:h-[50px]" src={Billetera} />
              <span className="font-font-family-light font-medium my-1 l:my-1">
                Billetera
              </span>
            </button>
            <button
              className="flex flex-col bg-Gris_muy_claro rounded-xl x:px-6 x:py-4 l:px-5 l:py-3 g:px-4 g:py-2 items-center shadow-xl border-b-[3px] border-Plata "
              onClick={handlePedidos}
            >
              <img className="g:h-[50px]" src={Pedidos} />
              <span className="font-font-family-light font-medium x:my-1 l:my-1">
                Pedidos
              </span>
            </button>
          </div>
          <div className=" border-Gris_muy_claro x:border-b-[4px] x:pb-5 l:pb-4 g:pb-3 g:border-b-[4px] ">
            <div className="flex bg-Gris_muy_claro x:px-4 x:py-4 x:mx-4 x:mt-6 x:gap-[185px] l:px-3 l:py-3 l:mx-3 l:mt-5 l:gap-[160px] rounded-xl shadow-lg border-b-[3px] border-Plata g:px-2 g:py-2 g:mx-2 g:mt-2 g:gap-[130px]">
              <div className="flex flex-col justify-center font-font-family-light x:text-[15px] l:text-[14px] g:text-[13px] g:leading-4 font-semibold">
                Uber One
                <span className="x:text-[13px] l:text-[12px] g:text-[11px] g:leading-4 font-normal">
                  4 semanas sin costo
                </span>
              </div>
              <div className="flex items-center">
                <img
                  className="x:h-[55px] x:w-[55px] l:h-[55px] l:w-[55px] g:h-[55px] g:w-[55px]"
                  src={UberOne}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mx-4 l:mx-3 g:mx-2">
            <div className="flex x:mt-5 l:mt-4 g:mt-3 items-center">
              <HiUserGroup className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-3 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Perfil familiar
                <span className="x:text-[11px] l:text-[10px] g:text-[10px] g:leading-4 font-normal font-font-family-light">
                  Administra un perfil familiar
                </span>
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <MdOutlineDirectionsCarFilled className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-3 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Viaje
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5  items-center">
              <AiOutlineTag className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:text-[14px] g:mr-3" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Promociones
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <MdOutlineHelpOutline className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Ayuda
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <PiSuitcaseBold className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Configura tu perfil de negocios
                <span className="text-[11px] font-normal">
                  Automatiza los gastos de viaje y comida de trabajo
                </span>
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <AiOutlineUserAdd className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Invitar a amigos
                <span className="text-[11px] font-normal">
                  Obtener CLP 4.000 de descuento en tu pedido
                </span>
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <RiGitRepositoryPrivateFill className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Privacidad
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <MdVibration className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Comunicacion
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <BsBag className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Genera ganancias: conduce o haz entregas
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <FaMicrophoneLines className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Configuracion de los camandos de voz
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <FiUser className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Administra la cuenta Uber
              </button>
            </div>
            <div className="flex x:mt-7 l:mt-6 g:mt-5 items-center">
              <IoInformationCircleOutline className="x:mr-5 x:text-[15px] l:mr-4 l:text-[14px] g:mr-4 g:text-[14px]" />
              <button className="flex flex-col x:text-[15px] l:text-[14px] font-font-family-light font-semibold x:leading-5 l:leading-4 g:text-[13px] g:leading-4">
                Quienes somos
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[90px]"></div>
      </IonContent>
    </>
  );
};

export default CuentaPage;
