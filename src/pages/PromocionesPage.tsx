import {
  IonButton,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { searchCircle, trashBin } from "ionicons/icons";
import React, { useState } from "react";

const PromocionesPage: React.FC = () => {
  const texts_1 = [
    "Usalo antes del 02/06/2024 - 8p.m En tiendas selectas",
    "para tu primer pedido",
    "Pedido minimo de CLP 8,000",
    "Es posible que las bebidas alcoholicas u otros articulos regulados no cumplan con los requisitos de esta promocion",
  ];
  const texts_2 = [
    "Usalo antes del 02/06/2024 - 8p.m En tiendas selectas",
    "para tu primer pedido",
    "Pedido minimo de CLP 8,000",
    "Es posible que las bebidas alcoholicas u otros articulos regulados no cumplan con los requisitos de esta promocion.",
  ];
  const texts_3 = [
    "Usalo antes del 02/06/2024 - 8p.m En tiendas selectas",
    "para tu primer pedido",
    "Pedido minimo de CLP 8,000",
    "Es posible que las bebidas alcoholicas u otros articulos regulados no cumplan con los requisitos de esta promocion.",
  ];
  const texts_4 = [
    "Usalo antes del 02/06/2024 - 8p.m En tiendas selectas",
    "para tu primer pedido",
    "Pedido minimo de CLP 8,000",
    "Es posible que las bebidas alcoholicas u otros articulos regulados no cumplan con los requisitos de esta promocion.",
  ];
  const texts_5 = [
    "Usalo antes del 02/06/2024 - 8p.m En tiendas selectas",
    "para tu primer pedido",
    "Pedido minimo de CLP 8,000",
    "Es posible que las bebidas alcoholicas u otros articulos regulados no cumplan con los requisitos de esta promocion.",
  ];

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar className="flex flex-col items-center justify-center px-2">
          <div className="w-full">
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Ingrese Codigo de Promo"
              className="w-full px-4 py-2 border-none bg-Mercurio  placeholder:text-Gris_paloma placeholder:font-font-family-light placeholder:font-normal placeholder:text-[15px] text-Negro font-font-family-light font-normal text-[15px] rounded-2xl shadow-sm focus:outline-none focus:ring-0 "
            />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent class="items-center justify-center ">
        <div className="mb-16">
          <div className="font-font-family-light font-medium leading-5 x:text-[20px] ml-3 mt-3">
            Acceso a nuevas promociones
          </div>
          <div className="flex flex-col gap-y-2 mx-2 mt-5">
            <div className="border-[2px] border-dashed rounded-md border-Gris_muy_claro px-2 py-2 h-auto">
              <div className="flex">
                <div className="flex flex-col">
                  <div className="font-font-family-light font-medium leading-5 text-[22px]">
                    CLP 6,000 de descuento
                  </div>
                  <div className="flex flex-wrap items-center  mt-3 font-font-family-light font-light leading-2 text-[12px] w-[320px]">
                    {texts_1.map((text, index) => (
                      <React.Fragment key={index}>
                        <span className="mr-0">{text}</span>
                        {index < texts_1.length - 1 && (
                          <span className="w-[3px] h-[3px] bg-Negro rounded-full mx-1"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex mt-5 gap-x-3">
                    <button className=" my-2 bg-Negro text-Blanco px-[10px] py-[10px] rounded-2xl font-font-family-light font-light text-[12px] leading-3">
                      Agregar la promocion
                    </button>
                    <button className="font-font-family-light font-medium text-[13px]">
                      Detalles
                    </button>
                  </div>
                </div>
                <div>123123</div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default PromocionesPage;
