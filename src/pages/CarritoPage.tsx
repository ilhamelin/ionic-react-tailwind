import React, { useState } from "react";
import { useHistory } from "react-router";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCircle, FaReceipt, FaSearch } from "react-icons/fa";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

import GifCarrito from "../img/IconGif/tienda-de-comestibles.gif";

import Portada_El_Señor_Bajon from "../img/El_Señor_De_Los_Bajones/Portada_Bajones.png";
import CustomActionSheet from "../components/CustomActionSheetProps";

const CarritoPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handlePedidos = () => {
    history.push("/pedidos");
  };

  const handleHome = () => {
    history.push("/home");
  };

  const handleActionClick = (action: string) => {
    console.log(action);
    setIsOpen(false);
  };

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex items-center gap-x-[234px] mt-1.5 mb-2">
            <button
              className="mx-5  rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="text-Negro text-[20px]" />
            </button>

            <button
              onClick={handlePedidos}
              className="flex bg-Gris_muy_claro text-[13px] font-bold px-2 py-2 rounded-xl"
            >
              <FaReceipt className="mr-1.5" />
              Pedidos
            </button>
          </div>
          <IonTitle className="font-font-family-light text-[28px]">
            Carrito
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="mx-4 my-4">
          <div className="flex flex-col items-center justify-center">
            <img className="h-[180px] w-[200px]" src={GifCarrito} />
            <div className="flex flex-col font-font-family-light text-center  text-[17px] font-semibold leading-6 px-5">
              <div>
                Agregar Articulos para comenzar a<span> llenar un Carrito</span>
              </div>
              <div className="flex flex-col text-[12px] font-light pt-2">
                Cuando agregues articulos de un restaurante o
                <span>Negocios, tu carrito aparecera aqui</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleHome}
                  className="bg-Negro text-Blanco text-[13px] font-bold px-2 py-2.5 rounded-2xl"
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>


        <div title="Card-Productos" className="px-3 py-3 mx-3 border border-Gris_muy_claro rounded-xl">
          <div className="flex">
            <img
              className="h-[60px] w-[60px] rounded-full"
              src={Portada_El_Señor_Bajon}
            />
            <div className="flex flex-col font-font-family-light pl-3 w-full">
              <div className="flex items-center font-semibold text-[16px] gap-x-[187px]">
                Nombre
                <button onClick={() => setIsOpen(true)}>
                  <HiMiniEllipsisHorizontal className="text-Gris_paloma text-[22px] " />
                </button>
                <CustomActionSheet
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  actions={[
                    {
                      content: (
                        <>
                          <div className="flex items-center">
                            <MdDelete className="mx-2 mr-4 text-[24px] text-Rojo_claro" />
                            <span className="font-medium text-Rojo_claro">
                              VacIar Carrito
                            </span>
                          </div>
                        </>
                      ),
                      onClick: () => handleActionClick("Busca el negocio"),
                    },
                  ]}
                />
              </div>
              <div className="flex items-center text-[13px] font-light">
                Cantidad de Articulos
                <FaCircle className="mx-[4px] text-[2.7px]" />
                <span>Mas Precio</span>
              </div>
              <div className="text-[13px] font-light">Direccion</div>
            </div>
          </div>
          <div className="flex flex-col pt-2 font-font-family-light">
            <button className="bg-Negro text-Blanco text-[15px] font-semibold py-2.5 rounded-lg">
                Ver el carrito
            </button>
            <button className="bg-Gris_muy_claro text-[15px] font-semibold mt-2 py-2.5 rounded-lg">
              Ver la Tienda
            </button>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default CarritoPage;
