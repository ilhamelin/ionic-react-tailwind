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
            <div className="flex x:gap-[80px] justify-start items-center max-w-screen-x">
              <div className="flex flex-col text-[30px] font-font-family-light">
                Benjamin ignacio
                <span>Reyes Valdes</span>
              </div>
              <FaCircleUser className="text-[56px] items-end" />
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="max-w-screen-x ">
          <div className="flex x:gap-[20px] justify-center x:mx-4 x:mt-4">
            <button
              className="flex flex-col bg-Gris_muy_claro rounded-xl x:px-6 x:py-4 items-center shadow-lg border-b-[3px] border-Plata"
              onClick={handleFavoritos}
            >
              <img src={Favoritos} />
              <span className="font-font-family-light font-medium my-1">
                Favoritos
              </span>
            </button>
            <button
              className="flex flex-col bg-Gris_muy_claro rounded-xl x:px-6 x:py-4 items-center shadow-xl border-b-[3px] border-Plata "
              onClick={handleBilletera}
            >
              <img src={Billetera} />
              <span className="font-font-family-light font-medium my-1">
                Billetera
              </span>
            </button>
            <button
              className="flex flex-col bg-Gris_muy_claro rounded-xl x:px-6 x:py-4 items-center shadow-xl border-b-[3px] border-Plata "
              onClick={handlePedidos}
            >
              <img src={Pedidos} />
              <span className="font-font-family-light font-medium my-1">
                Pedidos
              </span>
            </button>
          </div>
          <div className="x:border-b-[4px] border-Gris_muy_claro pb-5 ">
            <div className="flex bg-Gris_muy_claro x:px-4 x:py-4 x:gap-[185px] rounded-xl shadow-lg border-b-[3px] border-Plata x:mx-4 x:mt-6">
              <div className="flex flex-col justify-center font-font-family-light text-[15px] font-semibold">
                Uber One
                <span className="text-[13px] font-normal">
                  4 semanas sin costo
                </span>
              </div>
              <div className="flex items-center">
                <img className="x:h-[55px] x:w-[55px]" src={UberOne} />
              </div>
            </div>
          </div>
          <div className="flex flex-col x:mx-4 ">
            <div className="flex x:mt-5 items-center">
              <HiUserGroup className="x:mr-5 x:text-[15px]" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Perfil familiar
                <span className="text-[11px] font-normal">
                  Administra un perfil familiar
                </span>
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <MdOutlineDirectionsCarFilled className="x:mr-5 x:text-[15px]" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Viaje
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <AiOutlineTag className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Promociones
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <MdOutlineHelpOutline className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Ayuda
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <PiSuitcaseBold className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Configura tu perfil de negocios
                <span className="text-[11px] font-normal">
                  Automatiza los gastos de viaje y comida de trabajo
                </span>
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <AiOutlineUserAdd className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Invitar a amigos
                <span className="text-[11px] font-normal">
                  Obtener CLP 4.000 de descuento en tu pedido
                </span>
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <RiGitRepositoryPrivateFill className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Privacidad
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <MdVibration className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Comunicacion
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <BsBag className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Genera ganancias: conduce o haz entregas
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <FaMicrophoneLines className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Configuracion de los camandos de voz
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <FiUser className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
                Administra la cuenta Uber
              </button>
            </div>
            <div className="flex x:mt-7 items-center">
              <IoInformationCircleOutline className="x:mr-5 x:text-[15px] font" />
              <button className="flex flex-col x:text-[15px] font-font-family-light font-semibold leading-5">
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
